import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Link } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import { changeLanguageAction, toggleDrawer } from '../../redux/actions/main-action'
import '../../utils/i18next';
import classes from './menu-burger.module.css'
const MenuBurger = () => {
	const {t} = useTranslation()
	const navigate = useNavigate('')
	const dispatch = useDispatch()
	const [isActive, setIsActive] = useState(false)
	const toggleAboutUs = () => {
		setIsActive(!isActive)
	}
	const { drawer } = useSelector(state => state.mainReducer)
	// language
	const changleLanguage = lang => {
		i18n.changeLanguage(lang)
	}
	const { i18n } = useTranslation()
	const [isLangActive, setIsLangActive] = useState(
		JSON.parse(localStorage.getItem('lang-eca')) || 2
	)
	// scroll in about us
	const scroll = Scroll.animateScroll
	const whatWeDo = () => {
		scroll.scrollTo(450)
	}
	const mission = () => {
		scroll.scrollTo(1950)
	}
	const ourTeam = () => {
		scroll.scrollTo(3050)
	}
	const advantages = () => {
		scroll.scrollTo(4100)
	}
	return (
		<div
			style={{
				height: drawer ? '100vh' : '0',
				display: drawer ? 'flex' : 'none',
			}}
			className={classes.menuBurger}
		>
			<div className={classes.listGroup}>
				<Link
					onClick={() => {
						dispatch(toggleDrawer(false))
						navigate('/')
					}}
					className={classes.listItem}
				>
					{t('nav.home')}
				</Link>
				<div
					onClick={toggleAboutUs}
					style={{ position: 'relative' }}
					className={classes.listItem}
				>
					{t('nav.aboutUs')}
					<span style={{ float: 'right' }}>
						{isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</span>
					<div
						style={{
							display: isActive ? 'flex' : 'none',
						}}
						className={classes.aboutItem}
					>
						<Link
							onClick={() => {
								dispatch(toggleDrawer(false))
								navigate('/about-us')
							}}
							duration={500}
						>
							<p onClick={whatWeDo}>{t('about.part1')}</p>
						</Link>
						<Link
							onClick={() => {
								dispatch(toggleDrawer(false))
								navigate('/about-us')
							}}
							duration={500}
						>
							<p onClick={mission}>
							{t('about.part2.1')} <br />{t('about.part2.2')} 
							</p>
						</Link>
						<Link
							onClick={() => {
								dispatch(toggleDrawer(false))
								navigate('/about-us')
							}}
							duration={500}
						>
							<p onClick={ourTeam}>{t('about.part3')}</p>
						</Link>
						<Link
							onClick={() => {
								dispatch(toggleDrawer(false))
								navigate('/about-us')
							}}
							duration={500}
						>
							<p onClick={advantages}>{t('about.part4')}</p>
						</Link>
						<Link
							onClick={() => {
								dispatch(toggleDrawer(false))
								navigate('/associated-members')
							}}
						>
							{t('about.part5')}
						</Link>
						<Link
							onClick={() => {
								dispatch(toggleDrawer(false))
								navigate('/recommendations')
							}}
						>
							{t('about.part6')}
						</Link>
					</div>
				</div>
				<Link
					onClick={() => {
						dispatch(toggleDrawer(false))
						navigate('/services')
					}}
					className={classes.listItem}
				>
					{t('nav.services')}
				</Link>
				<Link
					onClick={() => {
						dispatch(toggleDrawer(false))
						navigate('/project')
					}}
					className={classes.listItem}
				>
					{t('nav.projects')}
				</Link>
				<Link
					onClick={() => {
						dispatch(toggleDrawer(false))
						navigate('/our-clients')
					}}
					className={classes.listItem}
				>
					{t('nav.ourClients')}
				</Link>
				<Link
					onClick={() => {
						dispatch(toggleDrawer(false))
						navigate('/news')
					}}
					className={classes.listItem}
				>
					{t('nav.news')}
				</Link>
				<Link
					onClick={() => {
						dispatch(toggleDrawer(false))
						navigate('/vacancies')
					}}
					className={classes.listItem}
				>
					{t('nav.vacancies')}
				</Link>
				<Link
					onClick={() => {
						dispatch(toggleDrawer(false))
						navigate('/contact-us')
					}}
					className={classes.listItem}
				>
					{t('nav.contacts')}
				</Link>
				<div className={classes.language}>
					<button
						className={`${classes.en} ${isLangActive === 2 && classes.color}`}
						onClick={() => {
							setIsLangActive(2)
							changleLanguage('en')
							dispatch(changeLanguageAction('en'))

						}}
					>
						English
					</button>
					<button
						onClick={() => {
							dispatch(changeLanguageAction('ru'))
							setIsLangActive(1)
							changleLanguage('ru')
						}}
						className={`${classes.ru} ${isLangActive === 1 && classes.color}`}
					>
						Русский
					</button>
				</div>
			</div>
		</div>
	)
}

export default MenuBurger
