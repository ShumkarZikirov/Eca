import React from 'react';
import styles from './about-nav-text1.module.css';
import '../../../utils/i18next';
import { useTranslation } from 'react-i18next';
const AboutNavText1 = () => {
	const {t} = useTranslation();
	return (
		<div  className={styles.info}>
			<h1 className={styles.title}>{t('about-nav-texts.part1.title')}</h1>
			<h4 className={styles.stepTitle}>{t('about-nav-texts.part1.stepTitle')}</h4>
			<p className={styles.text}>
				<span> {t("eca")} </span>{t('about-nav-texts.part1.description.text1')} <span> {t("eca")} </span> {t('about-nav-texts.part1.description.text2')} 
			</p>
		</div>
	)
}

export default AboutNavText1;
