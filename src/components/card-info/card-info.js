
import React from 'react';
import classes from './card-info.module.css';
import cardInfo from '../../assets/images/cart-info1.png';
import cardInfo2 from '../../assets/images/cart-info2.png';
import cardInfo3 from '../../assets/images/cart-info3.png';
import cardInfo4 from '../../assets/images/cart-info4.png';
import cardInfo5 from '../../assets/images/cart-info5.png';
import cardInfo6 from '../../assets/images/cart-info6.png';
import cardInfo12 from '../../assets/images/cart_info12.png';
import cardInfo22 from '../../assets/images/cart_info22.png';
import cardInfo33 from '../../assets/images/cart_info33.png';
import cardInfo44 from '../../assets/images/cart_info44.png';
import cardInfo55 from '../../assets/images/cart_info55.png';
import cardInfo66 from '../../assets/images/cart_info66.png';
import CardInfoItem from './card-info-item';
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';

const CardInfo = () => {
	const { t } = useTranslation();

	return (
		<div className={classes.cardInfo}>
			<div className={classes.title}>
				{t('export_of_central_asia.title')}
				<span className={classes.text}> {t('export_of_central_asia.description')}
				</span>
			</div>
			<div className={classes.content}>
				<div className={classes.item1}>
					<CardInfoItem
						title={t("slide_card1.card1")}
						title2={t("slide_card2.card1")}
						img={cardInfo}
						img2={cardInfo12} />
				</div>
				<div className={classes.item2}>
					<CardInfoItem
						title={t("slide_card1.card2")}
						title2={t("slide_card2.card2")}
						img={cardInfo2}
						img2={cardInfo22} />
				</div>
				<div className={classes.item3}>
					<CardInfoItem
						title={t("slide_card1.card3")}
						title2={t("slide_card2.card3")}
						img={cardInfo3}
						img2={cardInfo33} />
				</div>
				<div className={classes.item4}>
					<CardInfoItem
						title={t("slide_card1.card4")}
						title2={t("slide_card2.card4")}
						img={cardInfo4}
						img2={cardInfo44} />
				</div>
				<div className={classes.item5}>
					<CardInfoItem
						title={t("slide_card1.card5")}
						title2={t("slide_card2.card5")}
						img={cardInfo5}
						img2={cardInfo55} />–
				</div>
				<div className={classes.item6}>
					<CardInfoItem
						title={t("slide_card1.card6")}
						title2={t("slide_card2.card6")}
						img={cardInfo6}
						img2={cardInfo66} />
				</div>
			</div>
		</div>
	);
};

export default CardInfo
