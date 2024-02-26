import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import iconBanner from '../../../assets/images/banner-icon.png'
import banner5Img from '../../../assets/images/banner5.jpg'
import '../../../utils/i18next'
import MyButton from '../../my-button'
import styles from './banner5.module.css'
import { useDispatch } from 'react-redux'
import { togglePanelAboutNav } from '../../../redux/actions/main-action'
import * as Scroll from 'react-scroll';

const Banner5 = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const scroll = Scroll.animateScroll;
	const handleClick = () => {
		navigate('/associated-members')
	}

	return (
		<div className={styles.banner5}>
			<img className={styles.img} src={banner5Img} alt='' />
			<img className={styles.icon} src={iconBanner} alt='' />
			<div className={styles.block}>
				<h2>{t('banner-texts.banner5.title')}</h2>
				<p>{t('banner-texts.banner5.description')}</p>
				<MyButton

					onClick={handleClick}
					bgColor='#393184'
					color='#393184'
					textColor='#ffffff'
				>
					{t('button_text.eca')}
				</MyButton>
			</div>
		</div>
	)
}

export default Banner5
