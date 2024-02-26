import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Nav from '../../components/nav'
import { routes } from '../../utils/route'
import classes from './main-page.module.css'

const MainPage = () => {
	return (
		<div className={classes.mainPage}>
			<Header />
			<Nav />
			<Routes>
				{routes.map((item, index) => (
					<Route
						key={index}
						exact
						path={item.path}
						element={item.element} />
				))}
			</Routes>
			<Footer />
		</div>
	)
}

export default MainPage
