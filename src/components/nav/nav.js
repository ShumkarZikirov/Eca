import React, { useEffect, useRef } from 'react';
import styles from './nav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { themes } from '../../utils/themes';
import NavDropdown from './nav-dropdown/nav-dropdown';
import { openDropdown, closeDropdown } from '../../redux/actions/main-action';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import * as Scroll from 'react-scroll';

const Nav = () => {
  // translation language
  const { t } = useTranslation()
  const navigate = useNavigate()
  // hooks redux
  const { anchorEl } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();
  const scroll = Scroll.animateScroll;

  // menu dropDown 
  const menuRef = useRef();
  const handleClickAbout = () => {
    anchorEl ? dispatch(closeDropdown(false)) : dispatch(openDropdown(true))
  }

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        dispatch(closeDropdown(false))
      }
    }
    document.addEventListener('mousedown', handler)
  }, [])

  const handleScrollTo = () => {
    navigate('/services')
    scroll.scrollTo(0, { duration: 500, cancelEvents: true });
  }
  let activeClass = styles.active;
  let defaultClass = styles.navItem;

  return (
    <div style={themes.container} className={styles.sticky}>
      <div className={styles.nav}>
        <div className={styles.menu}>
          <NavLink
            className={({ isActive }) => isActive ? activeClass : defaultClass}
            to='/'>
            {t("nav.home")}
          </NavLink>
          <div
            ref={menuRef}
            className={`${defaultClass} ${styles.showDropdown}`}
            onClick={handleClickAbout}>{t("nav.aboutUs")}
            {anchorEl ? <NavDropdown /> : null}
          </div>
          <NavLink
            onClick={handleScrollTo}
            className={({ isActive }) => isActive ? activeClass : defaultClass}
            to='/services'>{t("nav.services")} </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? activeClass : defaultClass}
            to='/project'>{t("nav.projects")} </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? activeClass : defaultClass}
            to='/our-clients'>{t("nav.ourClients")}</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? activeClass : defaultClass}
            to='/news'>{t("nav.news")}</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? activeClass : defaultClass}
            to='/contact-us'>{t("nav.contacts")}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;