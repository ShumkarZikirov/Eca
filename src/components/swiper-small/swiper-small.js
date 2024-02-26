import React from 'react'
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './swiper-small.module.css';
import { useSelector } from 'react-redux';
const SwiperSmall = () => {
	const { images } = useSelector(state => state.newsReducer);
	return (
		<div className={styles.block}>
			<Swiper
				grabCursor={true}
				navigation={true}
				modules={[EffectFlip, Pagination, Navigation, Autoplay]}
				autoplay={{ delay: 3000 }}
				className='mySwiper'
			>
				{
					images && images.map(item => (
						<SwiperSlide>
							<img
								className={styles.swiperImg}
								src={item.image}
								alt="" />
						</SwiperSlide>

					))
				}
			</Swiper>
		</div>
	)
}

export default SwiperSmall
