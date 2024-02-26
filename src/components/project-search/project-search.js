import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import {
	getRequestProjectYear,
	getRequestProjectSearch,
	getRequestProjectSector,
	getRequestProjectList
} from '../../redux/request/projectRequest'
import '../../utils/i18next'
import styles from './project-search.module.css';

const ProjectSearch = ({setYear, setSector, sector, year}) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const startYear = 2013;
	const endYear = new Date().getFullYear();
	const years = Array.from(new Array(endYear - startYear + 1), (val, index) => startYear + index);
	const [search, setSearch] = useState('')



	const onChangeSearch = e => {
		e.preventDefault()
		dispatch(getRequestProjectSearch(search))
		setSearch('')
	}

	return (
		<div className={styles.projectSearch}>
			<form
				onSubmit={onChangeSearch}
				className={styles.form} action=''>
				<label className={styles.label}>
					<input
						className={styles.input}
						value={search}
						onChange={e => setSearch(e.target.value)}
						type={'text'}
						placeholder={t('search')}
					/>
					<SearchOutlinedIcon className={styles.icon} />
				</label>

				<input type={'submit'} hidden />
			</form>
			<div className={styles.block}>
				<Box
					sx={{
						'& fieldset': { border: 'none' },
					}}
				>
					<FormControl fullWidth>
						<Select
							className={styles.select}
							displayEmpty
							value={sector}
							onChange={(e) => setSector(e.target.value)}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem
								sx={{
									fontFamily: 'Raleway',
									fontSize: '20px',
									color: "#727A7E"
								}}
								value=''>
								<span>{t('sector')}</span>
							</MenuItem>
							<MenuItem
								sx={{
									fontFamily: 'Raleway',
									fontSize: '20px',
									color: "#727A7E"
								}}
								onClick={() => {
									dispatch(getRequestProjectSector('international'))
								}}
								value={t('project-sector.part1')}>
								<span>{t('project-sector.part1')}</span>
							</MenuItem>
							<MenuItem
								sx={{
									fontFamily: 'Raleway',
									fontSize: '20px',
									color: "#727A7E"
								}}
								onClick={() => {
									dispatch(getRequestProjectSector('public'))
								}}
								value={t('project-sector.part2')}>
								<span>{t('project-sector.part2')}</span>
							</MenuItem>
							<MenuItem
								sx={{
									fontFamily: 'Raleway',
									fontSize: '20px',
									color: "#727A7E"
								}}
								onClick={() => {
									dispatch(getRequestProjectSector('private'))
								}}
								value={t('project-sector.part3')}>
								<span>{t('project-sector.part3')}</span>
							</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>
			<div className={styles.block}>
				<Box
					sx={{
						'& fieldset': { border: 'none' },
					}}
				>
					<FormControl fullWidth>
						<Select
							className={styles.select}
							displayEmpty
							value={year}
							onChange={(e) => setYear(e.target.value)}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem
								sx={{
									fontFamily: 'Raleway',
									fontSize: '20px',
									color: "#727A7E"
								}}
								value=''>
								<span>{t('year')}</span>
							</MenuItem>
							{years.map(item => (
								<MenuItem
									sx={{
										fontFamily: 'Raleway',
										fontSize: '20px',
										color: "#727A7E"
									}}
									onClick={() => {
										dispatch(getRequestProjectYear(item))
									}}
									key={item}
									value={item}>
									<span>{item}</span>
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
			</div>
		</div>
	)
}

export default ProjectSearch
