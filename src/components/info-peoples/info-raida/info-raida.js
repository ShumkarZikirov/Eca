import StarIcon from '@mui/icons-material/Star'
import React, {useEffect} from 'react'
import img from '../../../assets/images/persons/raida.jpg'
import { themes } from '../../../utils/themes'
import styles from '../info-aziret/info-aziret.module.css'
import Profession from '../profession'
import '../../../utils/i18next';
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';
import PersonCard from '../../person-card'
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';
const InfoRaida = () => {
	const { t } = useTranslation();
	const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();
	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);
	return (
		<div className={styles.block}>
			<Helmet>
				<title>{t('people_card.card2.name')} | Experts of Central Asia</title>
			</Helmet>
			<div style={themes.container}>
				<div className={styles.main}>
					<div className={styles.profession}>
						<Profession
							peopleName={t("people_card.card2.name")}
							profession={t("people_card.card2.job")}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.img}>
							<PersonCard
								img={img}
								profecial={'Email:'}
								name={'rbashirova@eca.kg'}
							/>
						</div>
						<div className={styles.info}>
							<p>
								{t("people-info.part1.info")}
							</p>
							<div className={styles.item}>
								<h4>{t("people-info.part1.item-text")}</h4>
								<ul className={styles.list}>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list1")}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list2")}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list3")}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list4")}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list5")}
									</li>
								</ul>
								<h4>{t("people-info.part1.item-text2")}</h4>
								<ul className={styles.list}>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list6")}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list7")}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list8")}
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										{t("people-info.part1.list9")}
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

export default InfoRaida
