import imgSlider1 from '../../../assets/images/home-slider-peoples1.jpg'
import imgSlider2 from '../../../assets/images/home-slider-peoples2.jpg'
import imgSlider3 from '../../../assets/images/home-slider-peoples3.jpg'
import imgSlider4 from '../../../assets/images/home-slider-peoples4.jpg'
import imgSlider5 from '../../../assets/images/home-slider-peoples5.jpg'
import imgSlider6 from '../../../assets/images/home-slider-peoples6.jpg'
import imgSlider7 from '../../../assets/images/home-slider-peoples7.jpg'
import imgSlider8 from '../../../assets/images/home-slider-peoples8.jpg'
import imgSlider9 from '../../../assets/images/home-slider-peoples9.jpg'
import List from '../../list/list'
import styles from './banner2.module.css'
import { themes } from '../../../utils/themes';

const imgSliderArray = [
	{ img: imgSlider1 },
	{ img: imgSlider2 },
	{ img: imgSlider3 },
	{ img: imgSlider4 },
	{ img: imgSlider5 },
	{ img: imgSlider6 },
	{ img: imgSlider7 },
	{ img: imgSlider8 },
	{ img: imgSlider9 },
]
const Banner2 = () => {
	return (
		<div style={themes.banner} className={styles.banner2}>
			<List
				items={imgSliderArray}
				renderItem={(item, index) => <img key={index} src={item.img} alt='' />}
			/>
		</div>
	)
}

export default Banner2
