import React from 'react';
import "./animation-text.css"
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper';


const AnimationText = () => {
    const { t } = useTranslation();
    return (
        <div className={'animationText'}>
            <Swiper
                slidesPerView="1"
                loop={true}
                autoplay={{ delay: 2400 }}
                modules={[Autoplay]}
                direction={'vertical'}>
                <SwiperSlide>
                    <span style={{ color: '#ef7f1a' }} className='itemText'>{t("animation_texts.part1")}</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span style={{ color: '#3C0F78' }} className='itemText'>{t("animation_texts.part2")}</span>
                </SwiperSlide>
                <SwiperSlide>
                    <span style={{ color: 'red' }} className='itemText'>{t("animation_texts.part3")}</span>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default AnimationText