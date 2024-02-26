import React from 'react'
import imgBanner1 from '../../../assets/images/banner1.jpg'
import iconTelegram from '../../../assets/images/bannerIconTelegram.png'
import styles from './banner1.module.css' ;
import { useTranslation } from 'react-i18next';
import '../../../utils/i18next';
const Banner1 = ({ isActive }) => {
	const { t } = useTranslation()
	return (
		<div className={styles.banner1}>
			<img className={styles.mainImg} src={imgBanner1} alt='' />
			<div className={isActive ? styles.animation : styles.block}>
				<img className={styles.icon} src={iconTelegram} alt='' />
				<p className={styles.text}>{t('banner-texts.banner1.title')}</p>
			</div>
		</div>
	)
}

export default Banner1
