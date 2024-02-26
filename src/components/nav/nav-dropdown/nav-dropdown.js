import React from 'react'
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import styles from '../nav.module.css';
import '../../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const NavDropdown = () => {
	const { t } = useTranslation();
	const navigate = useNavigate()
	const scroll = Scroll.animateScroll;

	const handleScrollTo = (position) => {
		navigate('/about-us');
		scroll.scrollTo(position, { duration: 500, cancelEvents: true });
	};
	return (
		<div className={styles.navDropdown}>
			<div onClick={() => handleScrollTo(100)} className={styles.navDropdownText}>
				<Link to='/about-us' duration={500}>
					{t('about.part1')}
				</Link>
			</div>
			<div onClick={() => handleScrollTo(900)} className={styles.navDropdownText}>
				<Link to={'/about-us'} duration={500}>
					{t('about.part2.1')} <br /> {t('about.part2.2')}
				</Link>
			</div>
			<div
				onClick={() => handleScrollTo(1590)}
				className={styles.navDropdownText}>
				<Link to={'/about-us'} duration={500}>
					{t("about.part3")}
				</Link>
			</div>
			<div onClick={() => handleScrollTo(2470)} className={styles.navDropdownText}>
				<Link to='/about-us' duration={500}>
					{t("about.part4")}
				</Link>
			</div>
			<div className={styles.navDropdownText}>
				<Link to={'/associated-members'} >{t("about.part5")}</Link>
			</div>
			<div className={styles.navDropdownText}>
				<Link to={'/recommendations'}>{t("about.part6")}</Link>
			</div>
			<div className={`${styles.navDropdownText} ${styles.lastItem}`}>
				<Link to={'/vacancies'}>{t("about.part7")}</Link>
			</div>
		</div>
	)
}

export default NavDropdown
