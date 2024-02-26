import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import * as React from 'react'

const MyButton = ({
	children,
	color = '#000',
	textColor = '#000',
	bgColor = '',
	onClick,
	type,
}) => {
	const ColorButton = styled(Button)(() => ({
		color: textColor,
		borderColor: color,
		borderRadius: '10px',
		textTransform: 'none',
		fontFamily: 'Raleway',
		fontWeight: '500',
		fontSize: '20px',
		lineHeight: '23px',
		backgroundColor: bgColor,
		'&:hover': {
			borderColor: color,
			backgroundColor: '#393184',
			color: '#fff',
		},
	}))
	return (
		<ColorButton
			type={type}
			onClick={onClick}
			variant='outlined'>
			{children}
		</ColorButton>
	)
}

export default MyButton;
