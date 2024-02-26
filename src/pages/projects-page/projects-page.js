import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ImageMain from '../../assets/images/projectImage.png'
import MediaImage from '../../components/media-image'
import ProjectDetails from '../../components/project-item/project-item'
import ProjectSelect from '../../components/project-search'
import '../../utils/i18next'
import { themes } from '../../utils/themes';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestProjectList } from '../../redux/request/projectRequest';
import List from '../../components/list';
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom'

const ProjectsPage = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [year, setYear] = useState('')
	const [sector, setSector] = useState('')
	const [page, setPage] = useState(1);
	const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();

	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);
	useEffect(() => {
		dispatch(getRequestProjectList(page))
	}, [dispatch, page])

	const fetchData = () => {
		if (year !== '') {
			return;
		}
		if (sector !== '') {
			return;
		}
		setPage(page + 1)
	}
	const { projects } = useSelector(state => state.projectReducer);

	const element = projects.length === 0 ? <div className='no-btn'>
		<h1 className={'no'}>{t('no')}</h1>
		<button className={'no'} onClick={() => dispatch(getRequestProjectList())}>{t('update')}</button>
	</div> : <InfiniteScroll
		style={{
			overflow: "visible"
		}}
		next={fetchData}
		hasMore={true}
		dataLength={projects.length}>
		<List items={projects && projects}
			renderItem={(item, index) => (
				<ProjectDetails key={index} {...item} />
			)} />
	</InfiniteScroll>
	return (
		<div >
			<Helmet>
				<title>{t('nav.projects')} | Experts of Central Asia</title>
			</Helmet>
			<div style={themes.container}>
				<MediaImage
					image={ImageMain}
					title={t('media_img_text.our_project')}
					number='80'
				/>
				<ProjectSelect 
					setYear={setYear}
					setSector={setSector}
					sector={sector} 
					year={year} />
				{
					element
				}
			</div>
		</div>
	)
}

export default ProjectsPage
