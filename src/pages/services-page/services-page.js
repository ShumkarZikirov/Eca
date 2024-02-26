import React from "react";
import classes from "./services-page.module.css";
import { themes } from "../../utils/themes";
import MediaImage from "../../components/media-image";
import MainImage from "../../assets/images/servicesPage.png";
import ServiceNav from "../../components/service-nav"
import ServiceNavContent from "../../components/service-nav-content";
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import {Helmet} from 'react-helmet'

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.servicesPage}>
      <Helmet>
        <title>{t('nav.services')} | Experts of Central Asia</title>
      </Helmet>
      <div style={themes.container}>
        <MediaImage
          number="125"
          image={MainImage}
          title={t('media_img_text.our_service')} />
        <>
          <p className={classes.itemText}>
            <span>{t('eca')}</span> – {t('services_texts.description.part1')}
          </p>
          <p className={classes.itemText}>
            <span>{t('eca')}</span> – {t('services_texts.description.part2')}
          </p>
        </>
        <div className={classes.content}>
          <div className={classes.left}>
            <ServiceNav />
          </div>
          <div className={classes.right}>
            <ServiceNavContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
