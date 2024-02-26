import React from 'react';
import classes from './card-news-item.module.css';
import { useSelector } from 'react-redux';
import moment from 'moment'
import 'moment/locale/ru'
const CardNewsItemDate = ({created_at}) => {
    const { lang } = useSelector(state => state.mainReducer);
    const date_en = moment(created_at).locale('en').format("DD MMMM YYYY");
    const date_ru = moment(created_at).locale('ru').format("DD MMMM YYYY");
    return (
        <div className={classes.date}>
            <p>Media</p>
            <p>{lang ? date_ru : date_en}</p>
        </div>
    );
};

export default CardNewsItemDate;