import React, { useEffect } from 'react'
import ProjectItem from '../../components/project-item/project-item'
import { themes } from '../../utils/themes'
import styles from './company-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestProjectId } from '../../redux/request/projectRequest';
import { useParams } from 'react-router-dom';
import List from '../../components/list';
import Loader from '../../components/loader/loader';
import { Helmet } from 'react-helmet';
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';
const CompanyPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { item, loading } = useSelector(state => state.projectReducer);
	const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();
	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);
	useEffect(() => {
		dispatch(getRequestProjectId(id))
	}, [id])


	const elements = loading ? <Loader /> : <div className={styles.company}>
		{
			item.length !== 0 ? <div className={styles.blockImg}>
				<img src={item[0] && item[0].clients_logo} alt='' />
			</div> : null
		}
		<div className={styles.info}>

			<List items={item && item} renderItem={(item => (
				<>
					<Helmet>
						<title>{item.name_of_client} | Experts of Central Asia</title>
					</Helmet>
					<ProjectItem key={item.id} {...item} />
				</>
			))} />
		</div>
	</div>
	return (
		<div style={themes.container}>
			{elements}
		</div>
	)
}

export default CompanyPage
