import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Parners1 from '../../assets/images/partners/1.png'
import Parners2 from '../../assets/images/partners/2.png'
import Parners3 from '../../assets/images/partners/3.png'
import Parners4 from '../../assets/images/partners/4.png'
import Parners5 from '../../assets/images/partners/5.png'
import Parners6 from '../../assets/images/partners/6.png'
import Parners7 from '../../assets/images/partners/7.png'
import Parners8 from '../../assets/images/partners/8.png'
import Parners9 from '../../assets/images/partners/9.png'
import Parners10 from '../../assets/images/partners/10.png'
import Parners11 from '../../assets/images/partners/11.png'
import Parners12 from '../../assets/images/partners/12.png'
import Parners13 from '../../assets/images/partners/13.png'
import Parners14 from '../../assets/images/partners/14.png'
import Parners15 from '../../assets/images/partners/15.png'
import Parners16 from '../../assets/images/partners/16.png'


const SwiperPartners = () => {
	return (
		<Swiper
			modules={[Autoplay]}
			autoplay={{ delay: 3000 }}
			spaceBetween={50}
			slidesPerView={4.5}
			breakpoints={{
				900: {
                    slidesPerView: 4.5
                },
                640: {
                    slidesPerView: 3.5
                },
                330: {
                    slidesPerView: 2.5
                }
			}}
		>
			<SwiperSlide>
				<img src={Parners1} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners2} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners3} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners4} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners5} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners6} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners7} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners8} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners9} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners10} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners11} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners12} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners13} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners14} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners15} alt='' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Parners16} alt='' />
			</SwiperSlide>
		</Swiper>
	)
}

export default SwiperPartners
