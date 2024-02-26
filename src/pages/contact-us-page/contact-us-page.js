import React, {useEffect} from 'react';
import classes from './contact-us-page.module.css';
import {themes} from '../../utils/themes';
import MediaImage from '../../components/media-image';
import ImageMain from '../../assets/images/contactUs.png';
import ContactUs from '../../components/contact-us';
import LocationInfo from '../../components/location-info/index';
import "../../utils/i18next"
import { useTranslation } from 'react-i18next'
import {Helmet} from "react-helmet";
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';
const ContactUsPage = () => {
	const {t} = useTranslation()
  const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollTo(0, 0)
  }, [pathname]);
  return (
    <div className={classes.contactUs}>
      <Helmet>
				<title>{t('nav.contacts')} | Experts of Central Asia</title>
			</Helmet>
      <div style={themes.container}>
        <MediaImage 
          number='80'
          image={ImageMain} 
          title={t('media_img_text.contact_us')} />
          <div className={classes.block}>
            <ContactUs/>
            <LocationInfo/>
          </div>
      </div>
    </div>
  );
};

export default ContactUsPage;