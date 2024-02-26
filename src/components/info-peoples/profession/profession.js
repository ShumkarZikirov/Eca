import React from 'react'
import line from '../../../assets/images/profession-line.png'
import styles from './profession.module.css'
const Profession = ({ peopleName, profession }) => {
	return (
		<div className={styles.profession}>
			<div className={styles.block}>
				<img className={styles.img} src={line} alt='' />
				<p className={styles.name}>{peopleName}</p>
			</div>
			<p className={styles.text}>{profession}</p>
		</div>
	)
}

export default Profession
