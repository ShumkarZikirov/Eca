import React from 'react'
import classes from './media-image.module.css'

const MediaImage = ({ image, title, number = '100', color }) => {
	return (
		<div className={classes.mediaImage}>
			<img style={{ filter: `brightness(${number}%)` }}  src={image} alt='' />
			<h1 style={{ color: color }} className={classes.title}>
				{title}
			</h1>
		</div>
	)
}

export default MediaImage
