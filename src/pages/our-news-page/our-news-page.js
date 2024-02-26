import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import ImageMain from '../../assets/images/ournewsImage.png'
import CardNewsItem from '../../components/card-news-item'
import List from '../../components/list/index'
import MediaImage from '../../components/media-image';
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Box } from '@mui/system'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import IconButton from '@mui/material/IconButton';
import { newRequestList, newRequestFilterYear } from '../../redux/request/newsRequest'
import '../../utils/i18next'
import { themes } from '../../utils/themes'
import classes from './our-news-page.module.css'
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom'
const OurNewsPage = () => {
	const { t } = useTranslation();
	const [page, setPage] = useState(1);
	const startYear = 2013;
	const endYear = new Date().getFullYear();
	const years = [];
	for (let year = startYear; year <= endYear; year++) {
		if (year !== 2020 && year !== 2021) {
			years.push(year);
		}
	}
	const [year, setYear] = useState('')
	const { list, hasMore } = useSelector(state => state.newsReducer);
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const scroll = Scroll.animateScroll;
	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);

	useEffect(() => {
		dispatch(newRequestList(page));
	}, [dispatch, page]);

	const fetchData = () => {
		if (year !== '') {
			return;
		}
		setPage(page + 1)
	}

	return (
		<div className={classes.ournewsPage}>
			<Helmet>
				<title>{t('nav.news')} | Experts of Central Asia</title>
			</Helmet>
			<div style={themes.container}>
				<MediaImage
					image={ImageMain}
					title={t('media_img_text.our_news')}
					number='80'
				/>
				<div className={classes.filterNews}>
					<h3>{t('new-archive')}:</h3>
					<Box
						sx={{
							'& fieldset': { border: 'none' },
						}}
					>
						<FormControl fullWidth>
							<Select
								className={classes.select}
								displayEmpty
								value={year}
								onChange={(e) => setYear(e.target.value)}
								inputProps={{ 'aria-label': 'Without label' }}
							>
								<MenuItem
									sx={{
										fontFamily: 'Raleway',
										fontSize: '20px',
										color: "#727A7E"
									}}
									value=''>
									<span>{t('year')}</span>
								</MenuItem>
								{years.map(item => (
									<MenuItem
										sx={{
											fontFamily: 'Raleway',
											fontSize: '20px',
											color: "#727A7E"
										}}
										onClick={() => {
											dispatch(newRequestFilterYear(item))
										}}
										key={item}
										value={item}>
										<span>{item}</span>
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
					<IconButton onClick={() => window.location.reload()}>
						<RestartAltIcon />
					</IconButton>
				</div>
				<div className={classes.block}>
					<InfiniteScroll
						next={fetchData}
						hasMore={hasMore}
						dataLength={list.length}
						className={classes.info}>
						<List items={list && list}
							renderItem={item => (
								<CardNewsItem
									key={item.id}
									{...item} />
							)} />
					</InfiniteScroll>
				</div>
			</div>
		</div>
	)
}

export default OurNewsPage
