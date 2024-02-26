
import React from 'react';
import styles from './home-page.module.css';
import { themes } from '../../utils/themes';
import Slider from '../../components/slider';
import MyButton from '../../components/my-button';
import SwiperPartners from '../../components/swiper-partners';
import ContactUs from '../../components/contact-us';
import CardInfo from '../../components/card-info';
import OurServices from '../../components/our-services';
import LocationInfo from '../../components/location-info';
import WatchVideo from '../../components/watch-video';
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import * as Scroll from 'react-scroll'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/list/index';
import CardNewsItem from '../../components/card-news-item'
import PersonsScroll from '../../components/persons-scroll';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { pathname } = useLocation();

  const { lates } = useSelector(state => state.newsReducer);
  const scroll = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollTo(0, 0)
  }, [pathname]);
  return (
    <div className={styles.homePage}>
      <Helmet>
        <title>Home | Experts of Central Asia</title>
      </Helmet>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div style={themes.container}>
        <div className={styles.btnSetUp}>
          <MyButton
            onClick={() => navigate('/contact-us')}>
            {t("button_text.set_up")}
          </MyButton>
        </div>
      </div>
      <div className={styles.centralAsia}>
        <CardInfo />
      </div>
      <div className={styles.ourTeams}>
        <div style={themes.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('our_team')}</h1>
            <div className={styles.ourTeam}>
              <PersonsScroll />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourServices}>
        <div style={themes.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('our_services')}</h1>
            <OurServices />
            <div className={styles.btnourServices}>
              <MyButton
                onClick={() => {
                  scroll.scrollTo(0, { duration: 500, cancelEvents: true });
                  navigate('/services')
                }}>
                {t("button_text.learne_more")}
              </MyButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.clientsAndPartners}>
        <div style={themes.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('our_clients_and_partners')}</h1>
            <h3 className={styles.description}>
              {t('description_partner')}
            </h3>
            <div className={styles.swiper}>
              <div className={styles.swiperPosition}>
                <SwiperPartners />
              </div>
            </div>
            <div className={styles.btnClientsAndPartners}>
              <MyButton
                onClick={() => navigate('/our-clients')}>
                {t("button_text.learne_more")}
              </MyButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.latesNews}>
        <div style={themes.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('lates_news')}</h1>
            <div className={styles.cardNews}>
              <List items={lates && lates}
                renderItem={item => (
                  <CardNewsItem
                    key={item.id}
                    {...item} />
                )} />
            </div>
            <h3 className={styles.description}>
              {t('description_lates_news')}
            </h3>
            <div className={styles.btnLatesNews}>
              <MyButton
                onClick={() => navigate('/news')}
              >{t("button_text.read_more")}</MyButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.video}>
        <WatchVideo />
      </div>
      <div className={styles.form}>
        <div style={themes.container}>
          <div className={styles.wrapper}>
            <ContactUs />
            <LocationInfo />
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomePage
