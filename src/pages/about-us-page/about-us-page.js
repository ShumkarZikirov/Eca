import StarIcon from '@mui/icons-material/Star'
import React from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsNav from '../../components/about-us-nav'
import AosText from '../../components/aos-text'
import SliderAbout from '../../components/slider-about/slider-about'
import '../../utils/i18next'
import { themes } from '../../utils/themes'
import styles from './about-us-page.module.css'
import { Helmet } from "react-helmet";
import PersonsScroll from '../../components/persons-scroll';

const AboutUsPage = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.aboutUs}>
			<Helmet>
				<title>{t('nav.aboutUs')} | Experts of Central Asia</title>
			</Helmet>
			<div style={themes.container} className={styles.main}>
				<div className={styles.left}>
					<h4 className={styles.title}>{t('about-us-page.title')}</h4>
					<div className={styles.info}>
						<p className={styles.text}>
							<span className={styles.eca}>
								{t('about-us-page.strong_text')}{' '}
							</span>
							– {t('about-us-page.text1')}
							<span className={styles.strong}> {t('eca')} </span>
							{t('about-us-page.text2')}
						</p>
					</div>
					<p className={styles.text}>
						<span className={styles.eca}> {t('eca')} </span> –
						{t('about-us-page.text3')}
						<span className={styles.strong}> {t('eca')} </span>
						{t('about-us-page.text4')}
					</p>
					<div className={styles.list}>
						<ul className={styles.item}>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list1')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list2')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list3')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list4')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list5')}
							</li>
						</ul>
						<ul className={styles.item}>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list6')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list7')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list8')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								{t('about-us-page.list9')}
							</li>
							<li>
								<span>
									<StarIcon />
								</span>
								IT
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.right}>
					<SliderAbout />
				</div>
			</div>
			<div className={styles.aosText}>
				<AosText />
			</div>
			<div className={styles.ourTeamBlock}>
				<div style={themes.container}>
					<h4 className={styles.title2}>{t('about-us-page.title2')}</h4>
					<div className={styles.ourTeam}>
						<PersonsScroll/>
					</div>
				</div>
			</div>
			<div>
				<div id='about-section' style={themes.container}>
					<AboutUsNav />
				</div>
			</div>
		</div>
	)
}

export default AboutUsPage
