import React, {useEffect} from 'react'
import styles from '../info-aziret/info-aziret.module.css'
import StarIcon from '@mui/icons-material/Star'
import img from '../../../assets/images/persons/edil.jpg'
import { themes } from '../../../utils/themes'
import Profession from '../profession';
import '../../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import PersonCard from '../../person-card'
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';

const InfoEdil = () => {
	const { t } = useTranslation();
	const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();
	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);
	return (
		<div className={styles.block}>
			<Helmet>
				<title>{t('people_card.card3.name')} | Experts of Central Asia</title>
			</Helmet>
			<div style={themes.container}>
				<div className={styles.main}>
					<div className={styles.profession}>
						<Profession
							peopleName={t('people_card.card3.name')}
							profession={t('people_card.card3.job')}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.img}>
							<PersonCard
								img={img}
								profecial={'Email:'}
								name={'emamytbekov@eca.kg'}
							/>
						</div>
						<div className={styles.info}>
							<p>
								{t('people-info.part3.info')}
							</p>
							<div className={styles.item}>
								<h4>{t('people-info.part3.item-text')}</h4>
								<ul className={styles.list}>
									<li>
										<span>
											<StarIcon />
										</span>
										{t('people-info.part3.list1')}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t('people-info.part3.list2')}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t('people-info.part3.list3')}

									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoEdil
