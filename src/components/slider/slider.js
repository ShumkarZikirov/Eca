import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import Banner1 from '../banners/banner1'
import Banner3 from '../banners/banner3'
import Banner2 from '../banners/banner2'
import Banner4 from '../banners/banner4'
import Banner5 from '../banners/banner5'
import './slider.css'
import Banner6 from '../banners/banner6'
import Banner7 from '../banners/banner7'

export default function Slider() {
	return (
		<div className='my-slider'>
			<Swiper
				autoplay={{ delay: 4000 }}
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Pagination, Navigation, Autoplay]}
			>
				<SwiperSlide>
					{({ isActive }) => <Banner1 isActive={isActive} />}
				</SwiperSlide>
				<SwiperSlide>
					<Banner2 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner3 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner4 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner5 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner6 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner7 />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
