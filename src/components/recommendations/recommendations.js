import React from 'react'
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import imgRec from '../../assets/images/recammendations-main.png'
import img1 from '../../assets/images/reco.png'
import img2 from '../../assets/images/reco2.png'
import img3 from '../../assets/images/reco3.png'
import { themes } from '../../utils/themes'
import styles from './recommendations.module.css'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Recommendations = () => {
	const {t} = useTranslation()
	return (
		<div style={themes.container}>
			<Helmet>
				<title>{t("media_img_text.recommendations")}</title>
			</Helmet>
			<div className={styles.main}>
				<div className={styles.imgBlock}>
					<img className={styles.img} src={imgRec} alt='' />
					<div className={styles.textBlock}>
						<h1 className={styles.title}>{t('media_img_text.recommendations')}</h1>
					</div>
				</div>
				<div className={styles.swiper}>
					<div className={styles.block}>
						<Swiper
							grabCursor={true}
							navigation={true}
							modules={[EffectFlip, Pagination, Navigation, Autoplay]}
							autoplay={{ delay: 3000 }}
							className='mySwiper'
						>
							<SwiperSlide>
								<img className={styles.swiperImg} src={img1} alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img className={styles.swiperImg} src={img2} alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img className={styles.swiperImg} src={img3} alt='' />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recommendations
