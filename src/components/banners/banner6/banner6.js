import { useTranslation } from 'react-i18next'
import arrowRight from '../../../assets/images/arrow-right-banner.png'
import icon from '../../../assets/images/banner-icon.png'
import bannerImg from '../../../assets/images/banner6.jpg'
import '../../../utils/i18next'
import styles from './banner.module.css'
const Banner6 = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.banner6}>
			<img className={styles.img} src={bannerImg} alt='' />
			<img className={styles.icon} src={icon} alt='' />
			<div className={styles.info}>
				<h2>{t('banner-texts.banner6.title')}</h2>
				<div className={styles.infoBlock}>
					<ul className={styles.listGroup1}>
						<li>{t('banner-texts.banner6.list1.part1')}</li>
						<li>{t('banner-texts.banner6.list1.part2')}</li>
						<li>{t('banner-texts.banner6.list1.part3')}</li>
						<li>{t('banner-texts.banner6.list1.part4')}</li>
					</ul>
					<div className={styles.arrowBlock}>
						<img className={styles.arrow} src={arrowRight} alt='' />
					</div>
					<ul className={styles.listGroup2}>
						<li>{t('banner-texts.banner6.list2.part1')}</li>
						<li>{t('banner-texts.banner6.list2.part2')}</li>
						<li>{t('banner-texts.banner6.list2.part3')}</li>
						<li>{t('banner-texts.banner6.list2.part4')}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Banner6
