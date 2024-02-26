import StarIcon from '@mui/icons-material/Star'
import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import img from '../../../assets/images/persons/talantbek.jpg'
import '../../../utils/i18next'
import { themes } from '../../../utils/themes'
import styles from '../info-aziret/info-aziret.module.css'
import Profession from '../profession';
import PersonCard from '../../person-card'
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';
const InfoTalantbek = () => {
	const { t } = useTranslation()
	const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();
	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);
	return (
		<div className={styles.block}>
			<Helmet>
				<title>{t('people_card.card1.name')} | Experts of Central Asia</title>
			</Helmet>
			<div style={themes.container}>
				<div className={styles.main}>
					<div className={styles.profession}>
						<Profession
							peopleName={t('people_card.card1.name')}
							profession={t('people_card.card1.job')}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.img}>
							<PersonCard
								img={img}
								profecial={'Email:'}
								name={'tsakishev@eca.kg'}
							/>
						</div>
						<div className={styles.info}>
							<p>{t('people-info.part2.info')}</p>
							<div className={styles.item}>
								<h4>{t('people-info.part2.item-text2')}</h4>
								<ul className={styles.list}>
									<li>
										<span>
											{t('people-info.part2.list1') ? <StarIcon /> : null}
										</span>
										{t('people-info.part2.list1')}
									</li>
									<li>
										<span>
										{t('people-info.part2.list1') ? <StarIcon /> : null}
										</span>
										{t('people-info.part2.list2')}
									</li>
									<li>
										<span>
										{t('people-info.part2.list1') ? <StarIcon /> : null}
										</span>
										{t('people-info.part2.list3')}
									</li>
									<li>
										<span>
										{t('people-info.part2.list1') ? <StarIcon /> : null}
										</span>
										{t('people-info.part2.list4')}
									</li>
									<li>
										<span>
										{t('people-info.part2.list1') ? <StarIcon /> : null}
										</span>
										{t('people-info.part2.list5')}
									</li>
									<li>
										<span>
										{t('people-info.part2.list1') ? <StarIcon /> : null}
										</span>
										{t('people-info.part2.list6')}
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

export default InfoTalantbek
