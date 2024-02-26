import { useTranslation } from 'react-i18next'
import puzzlesImg from '../../../assets/images/banner4.jpg'
import puzzlesIcon from '../../../assets/images/slider-puzzles-icon.png'
import '../../../utils/i18next'
import MyButton from '../../my-button'
import styles from './banner4.module.css'
import '../../../utils/i18next'
import { useNavigate, Link } from 'react-router-dom'
import { togglePanelAboutNav } from '../../../redux/actions/main-action';
import { useDispatch } from 'react-redux'
import * as Scroll from 'react-scroll';
import { useEffect } from 'react'
const Banner4 = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const scroll = Scroll.animateScroll;

	const handleClick = () => {
		dispatch(togglePanelAboutNav(2))
		let scrollToPos = 2470;
		if (window.innerWidth < 768) { // если ширина экрана меньше 768px (мобильный)
			scrollToPos = 3750
		}
		if (window.innerWidth < 921) { // если ширина экрана меньше 768px (мобильный)
			scrollToPos = 3500
		}
		scroll.scrollTo(scrollToPos, { duration: 500, cancelEvents: true });
		navigate('/about-us')
	}

	return (
		<div className={styles.Banner4}>
			<img className={styles.img} src={puzzlesImg} alt='' />
			<img className={styles.icon} src={puzzlesIcon} alt='' />
			<div className={styles.info}>
				<h2>{t('banner-texts.banner4.title')}</h2>
				<p>{t('banner-texts.banner4.description')}</p>
				<div duration={500} className={styles.btn}>
					<MyButton
						onClick={() => handleClick()}
						textColor='#fff'
						color='#393184'
						bgColor='#393184'
					>
						{t('button_text.learne_more')}
					</MyButton>
				</div>
			</div>
		</div>
	)
}

export default Banner4
