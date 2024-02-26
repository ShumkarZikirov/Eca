import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import styles from './about-nav-text2.module.css';
import '../../../utils/i18next';
import { useTranslation } from 'react-i18next';

const AboutNavText2 = () => {
	const {t} = useTranslation();
	return (
		<div className={styles.aboutNavText}>
			<h1 className={styles.title}>{t('banner-texts.banner4.title')}</h1>
			<h4 className={styles.stepTitle}>
				{t('about-nav-texts.part2.description')}{' '}
			</h4>
			<div className={styles.block}>
				<h5 className={styles.blockTitle}>
					{t("about-nav-texts.part2.block-title")}
				</h5>
				<ul className={styles.list}>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list1")}
					</li>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list2")}
					</li>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list3")}
					</li>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list4")}
					</li>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list5")}
					</li>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list6")}
					</li>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list7")}
					</li>
					<li>
						<span>
							<StarIcon />
						</span>
						{t("about-nav-texts.part2.list8")}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AboutNavText2
