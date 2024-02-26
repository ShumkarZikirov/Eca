import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import PersonCard from '../person-card/person-card';
import edil from '../../assets/images/persons/edil.jpg'
import raida from '../../assets/images/persons/raida.jpg'
import aziret from '../../assets/images/persons/aziret.jpg'
import talantbek from '../../assets/images/persons/talantbek.jpg'
import suria from '../../assets/images/persons/suria.jpg'
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
const PersonsScroll = () => {
    const { t } = useTranslation();

    return (
        <Swiper
            breakpoints={{
                900: {
                    slidesPerView: 3.5
                },
                640: {
                    slidesPerView: 2.5
                },
                330: {
                    slidesPerView: 2
                }
            }}
            navigation={true}
            slidesPerView={3.5}
            spaceBetween={30}
            autoplay={{delay: 2500}}
            className="mySwiper"
            modules={[Autoplay, Navigation]}
        >
            <SwiperSlide>
                <PersonCard
                    img={talantbek}
                    name={t('people_card.card1.name')}
                    profecial={t('people_card.card1.job')}
                    link={'/Talantbek T. Sakishev'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <PersonCard
                    img={raida}
                    name={t('people_card.card2.name')}
                    profecial={t('people_card.card2.job')}
                    link={'/Raida Bashirova'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <PersonCard
                    img={edil}
                    name={t('people_card.card3.name')}
                    profecial={t('people_card.card3.job')}
                    link={'/Edil Mamytbekov'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <PersonCard
                    img={aziret}
                    name={t('people_card.card4.name')}
                    profecial={t('people_card.card4.job')}
                    link={'/Aziret Sakishev'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <PersonCard
                    img={suria}
                    name={t('people_card.card5.name')}
                    profecial={t('people_card.card5.job')}
                    link={'/Suriya Mirzhalalova'}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default PersonsScroll;