import StarIcon from '@mui/icons-material/Star'
import React from 'react'
import img1 from '../../assets/images/aos-blue.png'
import img4 from '../../assets/images/aos-blues.png'
import img2 from '../../assets/images/aos-orange.png'
import img3 from '../../assets/images/aos-red.png'
import { themes } from '../../utils/themes'
import styles from './aos-text.module.css'
import '../../utils/i18next'
import { useTranslation } from 'react-i18next';


const AosText = () => {
	const {t} = useTranslation()
	return (
		<div className={styles.aosText}>
			<div style={themes.container}>
				<h4 className={styles.title}>{t("aos-text.title")}</h4>
				<div className={styles.block}>
					<div className={styles.info}>
						<div data-aos='zoom-out-left' className={styles.left}>
							<div className={styles.step}>
								<img src={img1} alt='' />
								<p className={styles.stepTitle}>{t("aos-text.part1.title")}</p>
							</div>
							<p className={styles.text}>
								{t("aos-text.part1.description")}
							</p>
						</div>
						<div data-aos='zoom-out-right' className={styles.right}>
							<div className={styles.step}>
								<img src={img2} alt='' />
								<p className={styles.stepTitle}>{t("aos-text.part2.title")}</p>
							</div>
							<p className={styles.text}>{t("aos-text.part2.description")}</p>
						</div>
					</div>
					<div data-aos='zoom-out-left' className={styles.info}>
						<div className={styles.left}>
							<div className={styles.step}>
								<img src={img3} alt='' />
								<p className={styles.stepTitle}>{t("aos-text.part3.title")}</p>
							</div>
							<p className={styles.text}>
								{t("aos-text.part3.description")} 
								<span className={styles.eca}> {t("eca")} </span>
								{t("aos-text.part3.description1")} 
							</p>
						</div>
						<div data-aos='zoom-out-right' className={styles.right}>
							<div className={styles.step}>
								<img src={img4} alt='' />
								<p className={styles.stepTitle}>{t("aos-text.part4.title")}</p>
							</div>
							<p className={styles.text}>
								<span className={styles.eca}> {t("eca")} </span> {t("aos-text.part4.description")}
							</p>
							<ul className={styles.list}>
								<li>
									<span>
										<StarIcon />
									</span>
									{t("aos-text.part4.list1")}
								</li>
								<li>
									<span>
										<StarIcon />
									</span>
									{t("aos-text.part4.list2")}
								</li>
								<li>
									<span>
										<StarIcon />
									</span>
									{t("aos-text.part4.list3")}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AosText
