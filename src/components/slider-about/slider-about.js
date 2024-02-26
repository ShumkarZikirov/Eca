import React from 'react';
import img1 from '../../assets/images/cart-info1.png'
import img2 from '../../assets/images/cart-info2.png'
import img3 from '../../assets/images/cart-info3.png'
import img4 from '../../assets/images/cart-info4.png'
import img5 from '../../assets/images/cart-info5.png'
import img6 from '../../assets/images/cart-info6.png'
import img7 from '../../assets/images/cart_info12.png'
import img8 from '../../assets/images/cart_info22.png'
import img9 from '../../assets/images/cart_info33.png'
import img10 from '../../assets/images/cart_info44.png'
import img11 from '../../assets/images/cart_info55.png'
import img12 from '../../assets/images/cart_info66.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import { themes } from '../../utils/themes';
import classes from './slider-about.module.css';
import 'swiper/css/effect-creative';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
const SliderAbout = () => {
    const { t } = useTranslation();
    const aboutList = [
        { id: 1, title: t('slide_card1.card1'), images: img1 },
        { id: 2, title: t('slide_card1.card2'), images: img2 },
        { id: 3, title: t('slide_card1.card3'), images: img3 },
        { id: 4, title: t('slide_card1.card4'), images: img4 },
        { id: 5, title: t('slide_card1.card5'), images: img5 },
        { id: 6, title: t('slide_card1.card6'), images: img6 },
        { id: 7, title: t('slide_card2.card1'), images: img7 },
        { id: 8, title: t('slide_card2.card2'), images: img8 },
        { id: 9, title: t('slide_card2.card3'), images: img9 },
        { id: 10, title: t('slide_card2.card4'), images: img10 },
        { id: 11, title: t('slide_card2.card5'), images: img11 },
        { id: 12, title: t('slide_card2.card6'), images: img12 },
    ];

    return (
        <div className={classes.aboutSlider}>
            <Swiper
                grabCursor={true}
                autoplay={{ delay: 2400 }}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-20%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative, Autoplay]}
            >
                {
                    aboutList.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className={classes.img}>
                                <img src={item.images} alt="" />
                            </div>
                            <div
                                style={themes.dFlexCenter}
                                className={classes.textInfo}>
                                <p>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SliderAbout;