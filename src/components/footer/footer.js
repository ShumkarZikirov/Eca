import React from 'react';
import styles from './footer.module.css';
import { themes } from '../../utils/themes';
import LogoFooter from '../../assets/images/logoFooter.png'
import List from '../list';
import { Link } from 'react-router-dom';
import NorthIcon from '@mui/icons-material/North';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll'
const Footer = () => {

  const { t } = useTranslation()
  const scroll = Scroll.animateScroll;
  const menus = t('footer', { returnObjects: true });
  const endYear = new Date().getFullYear();
  const handleClickUpPage = () => {
    scroll.scrollTo(0, 0)
  }

  return (
    <div className={styles.footer}>
      <div style={themes.container}>
        <div className={styles.content}>
          <div className={styles.menu}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img src={LogoFooter} alt="" />
              </div>
              <div onClick={handleClickUpPage}
                className={styles.upPhohe}>
                <NorthIcon sx={{ fontSize: 20 }} />
              </div>
            </div>
            <div className={styles.nav}>
              <List
                items={menus}
                renderItem={(item) => <Link
                  to={item.link}
                  className={styles.navItem}
                  key={item.id}>
                  {item.title}
                </Link>} />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.address}>
              <div className={styles.addressText}>
                {t('map.address')}
                <br />
                <a style={{
                  textAlign:"left",
                  color: '#33BEE5',
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: '500'
                }} href="mailto:info@eca.kg">info@eca.kg</a>
            </div>
          </div>
          <div className={styles.social}>
            <div onClick={handleClickUpPage}
              className={styles.up}>
              <NorthIcon sx={{ fontSize: 40 }} />
            </div>
            <div className={styles.socialIcon}>
              <a href=""><FacebookIcon sx={{ color: '#fff', fontSize: 30 }} /></a>
              <a href=""><LinkedInIcon sx={{ color: '#fff', fontSize: 30 }} /></a>
              <a href=""><InstagramIcon sx={{ color: '#fff', fontSize: 30 }} /></a>
            </div>
          </div>
        </div>
        <p>Experts of Central Asia © 2023. {t('footer_bottom-text')}</p>
      </div>
    </div>
    </div >
  );
};

export default Footer;