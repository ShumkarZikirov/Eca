import React from "react";
import styles from "./location-info.module.css";
import '../../utils/i18next';
import { useTranslation } from "react-i18next";

const LocationInfo = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.locationInfo}>
      <h1 className={styles.title}>{t('map.title')}</h1>
      <div className={styles.item}>
        <p className={styles.itemText}>
          {t('map.address')}
        </p>
        <p style={{
          textAlign: "left"
        }}>
          <a style={{
            color: '#33BEE5',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '500'
          }} href="mailto:info@eca.kg">info@eca.kg</a>
          </p>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1462.2024653606359!2d74.59888612587815!3d42.864296674980366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d3eee5b4b5%3A0x32c1e4b2b3ab65d2!2zMTQ1INGD0LsuINCf0LDQvdGE0LjQu9C-0LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1676459090526!5m2!1sru!2skg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
