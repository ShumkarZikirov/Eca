import React from 'react'
import { Link } from 'react-router-dom'
import styles from './about-nav-text3.module.css';
import '../../../utils/i18next';
import { useTranslation } from 'react-i18next';
const AboutNavtext3 = () => {
	const {t} = useTranslation();
	return (
		<div className={styles.block}>
			<h1 className={styles.title}>
				{t("about-nav-texts.part3.title.part1")} <span> {t("eca")} </span> {t("about-nav-texts.part3.title.part2")}
			</h1>
			<p className={styles.text}>
			{t("about-nav-texts.part3.text")}
			</p>
			<div className={styles.link}>
				<Link to='/associated-members'>{t("button_text.eca")}</Link>
			</div>
		</div>
	)
}

export default AboutNavtext3
