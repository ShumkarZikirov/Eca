import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import LogoHeader from '../../assets/images/logoEca.png';
import { themes } from '../../utils/themes';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/main-action';
import MenuBurger from '../menu-burger';
import { useTranslation } from 'react-i18next';
import AnimationText from "../animation-text"
import '../../utils/i18next';
import { changeLanguageAction } from '../../redux/actions/main-action';
const Header = () => {
  const {i18n} = useTranslation()
  const [isActive, setIsActive] = useState(2);
  const {drawer} = useSelector(state => state.mainReducer)
  const navigate = useNavigate('');
  const dispatch = useDispatch();
  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  useEffect(() => {
    setIsActive(2)
    changleLanguage('en')
  }, [])

  const handleClick = () => {
    dispatch(toggleDrawer(!drawer))
  };

  return (
    <div className={styles.header}>
      <MenuBurger />
      <div style={themes.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.box}>
              <div className={styles.burger}>
                <div onClick={() => navigate('/')}
                  className={styles.logo}>
                  <img src={LogoHeader} alt="" />
                </div>
                <div className={styles.menu}>
                  <IconButton onClick={handleClick}>
                    <MenuIcon sx={{ color: '#393184', fontSize: "24px" }} />
                  </IconButton>
                </div>
              </div>
              <AnimationText />
            </div>
            <div className={styles.language}>
              <span
                className={`${styles.ru} ${isActive === 1 && styles.active}`}
                onClick={() => {
                  setIsActive(1)
                  changleLanguage('ru')
                  dispatch(changeLanguageAction(true))
                }}>
                Русский
              </span>
              <span
                onClick={() => {
                  dispatch(changeLanguageAction(false))
                  setIsActive(2)
                  changleLanguage('en')
                }}
                className={`${styles.en} ${isActive === 2 && styles.active}`}>
                English
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;