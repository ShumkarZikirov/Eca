import React from "react";
import Strategic from "../../assets/images/strategic.png";
import Financial from "../../assets/images/financial.png";
import Legal from "../../assets/images/legal.png";
import Marketing from "../../assets/images/marketing.png";
import Investment from "../../assets/images/investment.png";
import Human from "../../assets/images/human.png";
import styles from "./our-services.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Scroll from 'react-scroll'
import '../../utils/i18next';
import { useSelector, useDispatch } from 'react-redux'
import { togglePanelServices } from "../../redux/actions/main-action";
import { getCategoryItem } from "../../redux/request/request";
const OurServices = () => {
  const { category } = useSelector(state => state.categorytReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const scroll = Scroll.animateScroll;

  const handleScrollTo = (id) => {
    scroll.scrollTo(900, { duration: 500, cancelEvents: true });
    dispatch(togglePanelServices(id))
    dispatch(getCategoryItem(id))
    navigate('/services');
  };
  return (
    <div className={styles.ourServices}>
      <div className={styles.group}>
        <div onClick={() => handleScrollTo(category[0].id)}
          className={styles.item}>
          <div className={styles.icon}>
            <img src={Strategic} alt="Strategic" />
          </div>
          <p className={styles.itemText}>{t('services_texts.strategic')}</p>
        </div>
        <div
          onClick={() => handleScrollTo(category[2].id)}
          className={styles.item}>
          <div className={styles.icon}>
            <img src={Financial} alt="Financial" />
          </div>
          <p className={styles.itemText}>{t('services_texts.financial')}</p>
        </div>
        <div
          onClick={() => handleScrollTo(category[4].id)}
          className={styles.item}>
          <div className={styles.icon}>
            <img src={Legal} alt="Legal" />
          </div>
          <p className={styles.itemText}>{t('services_texts.legal')}</p>
        </div>
        <div
          onClick={() => handleScrollTo(category[1].id)}
          className={styles.item}>
          <div className={styles.icon}>
            <img src={Marketing} alt="Marketing" />
          </div>
          <p className={styles.itemText}>{t('services_texts.marketing')}</p>
        </div>
        <div
          onClick={() => handleScrollTo(category[3].id)}
          className={styles.item}>
          <div className={styles.icon}>
            <img src={Investment} alt="Investment" />
          </div>
          <p className={styles.itemText}>{t('services_texts.investment')}</p>
        </div>
        <div
          onClick={() => handleScrollTo(category[5].id)}
          className={styles.item}>
          <div className={styles.icon}>
            <img src={Human} alt="Human" />
          </div>
          <p className={styles.itemText}>{t('services_texts.human')}</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
