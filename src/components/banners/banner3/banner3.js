import React from 'react';
import imgBanner from '../../../assets/images/banner3.jpg'
import icon from '../../../assets/images/banner3Icon.png'
import styles from './banner3.module.css';
import '../../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { themes } from '../../../utils/themes';

const Banner3 = () => {
	const {t} = useTranslation()
  return (
	<div style={themes.banner} className={styles.block}>
	  <img className={styles.img} src={imgBanner} alt="" />
	  <img className={styles.icon} src={icon} alt="" />
	  <div className={styles.info}>
		<h1 className={styles.title}>{t('banner-texts.banner2.part1')}</h1>
		<p className={styles.text}>{t('banner-texts.banner2.part2')}</p>
	  </div>
	</div>
  )
}

export default Banner3
