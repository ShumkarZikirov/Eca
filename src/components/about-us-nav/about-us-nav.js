import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePanelAboutNav } from '../../redux/actions/main-action';
import Navtext1 from '../about-nav-texts/about-nav-text1';
import NavText2 from '../about-nav-texts/about-nav-text2';
import NavText3 from '../about-nav-texts/about-nav-text3';
import PanelItem from '../panel-item';
import styles from './about-us-nav.module.css';
import '../../utils/i18next'
import { useTranslation } from 'react-i18next';
import List from '../list';
import icon1 from '../../assets/images/about-panel-icon1.png'
import icon2 from '../../assets/images/about-panel-icon2.png'
import icon3 from '../../assets/images/about-panel-icon3.png'


const AboutUsNav = () => {
	const { t } = useTranslation()
	const title1 = t("aboutPanel.title1")
	const title2 = t("aboutPanel.title2")
	const title3 = t("aboutPanel.title3")
	const aboutPanel = [
		{
			id: 1,
			images: icon1,
			title: title1,
			_id: 'Strong Mission'
		},
		{
			id: 2,
			images: icon2,
			title: title2,
			_id: 'Values'
		},
		{
			id: 3,
			images: icon3,
			title: title3,
			_id: 'Associated ECA Experts'
		}
	]
	const dispatch = useDispatch()
	const { aboutNavId } = useSelector(state => state.mainReducer)
	const toggleActive = id => {
		dispatch(togglePanelAboutNav(id))
	}
	return (
		<div className={styles.aboutNav}>
			<div className={styles.main}>
				<div className={styles.info}>
					<h4 className={styles.title}>{t("about-nav-texts.title")}</h4>
					<div className={styles.btns}>
						<List
							items={aboutPanel && aboutPanel}
							renderItem={(item) => (
								<PanelItem
									image={item.images}
									active={aboutNavId}
									onClick={() => toggleActive(item.id)}
									key={item.id}
									{...item}
								>
									{item.title}
								</PanelItem>
							)}
						/>
					</div>
				</div>
				<div className={styles.blocks}>
					{aboutNavId === 1 ? (
						<Navtext1 />
					) : aboutNavId === 2 ? (
						<NavText2 />
					) : aboutNavId === 3 ? (
						<NavText3 />
					) : null}
				</div>
			</div>
		</div>
	)
}

export default AboutUsNav
