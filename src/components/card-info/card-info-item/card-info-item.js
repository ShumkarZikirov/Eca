import { Autoplay, EffectCreative } from 'swiper'
import 'swiper/css/effect-creative'
import { Swiper, SwiperSlide } from 'swiper/react'
import { themes } from '../../../utils/themes';
import styles from '../card-info.module.css';

const CardInfoItem = ({ img, img2, title, title2 }) => {
    return (
        <div className={styles.cardInfoItem}>
            <Swiper
                grabCursor={true}
                effect={`creative`}
                autoplay={{ delay: 2200 }}
                modules={[Autoplay, EffectCreative]}
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -5],
                    },
                    next: {
                        shadow: true,
                        translate: ["100%", 0, 0],
                    },
                }}
            >
                <SwiperSlide>
                    <img src={img} alt="" />
                    <div
                        style={themes.dFlexCenter}
                        className={styles.textInfo}>
                        <p>{title}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <div
                        style={themes.dFlexCenter}
                        className={styles.textInfo}>
                        <p>{title2}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default CardInfoItem;

