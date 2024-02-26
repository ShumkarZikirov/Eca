import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../utils/i18next'
import MyButton from '../my-button'
import styles from './project-item.module.css'
import parse from 'html-react-parser';
import ProjectItemText from './project-item-text'
const ProjectItem = (props) => {
	const {
		country_en,
		country_ru,
		financing_agency_en,
		financing_agency_ru,
		month_en,
		month_ru,
		name_of_client_en,
		name_of_client_ru,
		projects_detail_ru,
		sector_ru,
		projects_detail_en,
		sector_en,
		id,
		year } = props;
	const { t } = useTranslation()
	const [active, setActive] = useState(false)
	const onHidden = () => {
		setActive(!active)
	}

	return (
		<div className={styles.projectItem}>
			<div className={styles.main}>
				<div className={styles.block}>
					<h5>{t('project.name_of_client')}:</h5>
					<ProjectItemText ru={name_of_client_ru} en={name_of_client_en}  />
				</div>
				<div className={styles.block}>
					<h5>{t('project.financy')}:</h5>
					<ProjectItemText ru={financing_agency_ru} en={financing_agency_en} />
				</div>
				<div className={styles.block}>
					<h5>{t('project.country')}:</h5>
					<ProjectItemText ru={country_ru} en={country_en} />
				</div>
				<div className={styles.block}>
					<h5>{t('project.sector')}:</h5>
					<ProjectItemText ru={sector_ru} en={sector_en} />
				</div>
				<div className={styles.block}>
					<h5>{t('project.date')}:</h5>
					<ProjectItemText ru={month_ru} en={month_en} />
				</div>
				<div className={`${styles.block} ${styles.block2}`}>
					<h5 className={styles.title}>{t('project.project_detail')}:</h5>
					<div
						style={{
							overflow: active ? '' : 'hidden',
							height: active ? '100%' : '112px'
						}}
						onClick={onHidden}
						className={styles.texts}>
						<ProjectItemText ru={parse(projects_detail_ru)} en={parse(projects_detail_en)} />
					</div>
				</div>
				<div className={styles.btn}>
					<MyButton onClick={onHidden}>
						{active ? t('button_text.hide_text') : t('button_text.read_more')}
					</MyButton>
				</div>
			</div>
		</div>
	)
}

export default ProjectItem
