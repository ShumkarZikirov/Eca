import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import Fab from '@mui/material/Fab'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { themes } from '../../utils/themes'
import SwiperSmall from '../swiper-small'
import styles from './news-details.module.css'
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { useParams, useLocation } from 'react-router-dom';
import { newRequestImageId, newRequestDetail } from '../../redux/request/newsRequest'
import moment from 'moment'
import { Helmet } from 'react-helmet';
import * as Scroll from 'react-scroll'
const NewsDetail = () => {
	const { item } = useSelector(state => state.newsReducer);
	const { lang } = useSelector(state => state.mainReducer);
	const { id } = useParams();
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const scroll = Scroll.animateScroll;

	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);

	useEffect(() => {
		dispatch(newRequestDetail(id));
		dispatch(newRequestImageId(id));
	}, [])
	const { title_en, title_ru, content_ru, content_en, created_at } = item;
	const date = created_at;
	const formatDate = (date) => moment(date).format('DD, MMMM YYYY');
	const html_ru = typeof content_ru === 'string' ? parse(content_ru) : null;
	const html_en = typeof content_en === 'string' ? parse(content_en) : null;
	const elements = lang ? html_ru : html_en
	return (
		<div style={themes.container}>
			<Helmet>
				<title>{title_en}</title>
			</Helmet>
			<div className={styles.details}>
				<Link to='/news' className={styles.back}>
					<Fab color='default' className={styles.btn} aria-label='add'>
						<NavigateBeforeIcon className={styles.icon} />
					</Fab>
				</Link>
				<p className={styles.date}>{formatDate(date)}</p>
				<h5 className={styles.title}>
					{lang ? title_ru : title_en}
				</h5>
				<div className={styles.block}>
					<div className={styles.imgs}>
						<SwiperSmall />
					</div>
					<p>
						{elements}
					</p>
				</div>
			</div>
		</div>
	)
}

export default NewsDetail
