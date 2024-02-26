import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import whiteImg from '../../assets/images/white-news.jpg'
import '../../utils/i18next'
import MyButton from '../my-button'
import CardNewsItemText from './card-news-item-text'
import classes from './card-news-item.module.css'
import CardNewsItemDate from './card-news-item-date'

const CardNewsItem = (props) => {
    const { id, main_image, title_en, title_ru, created_at } = props;
    const { t } = useTranslation();

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/news-detail/${id}`)
    }

    return (
        <Card
            className={classes.block}
            sx={{
                maxWidth: 350,
                width: '100%',
                borderRadius: "20px",
            }}>
            <CardMedia
                className={classes.img}
                sx={{
                    borderRadius: '10px 10px 0 0',
                    width: "100%"
                }}
                component="img"
                image={main_image ? main_image : whiteImg}
                alt="green iguana"
            />
            <div className={classes.info}>
                <CardContent className={classes.texts}>
                    <CardNewsItemDate
                        created_at={created_at}
                    />
                    <CardNewsItemText
                        titleEn={title_en}
                        titleRu={title_ru} />
                </CardContent>
                <div className={classes.btn}>
                    <MyButton onClick={handleClick}>
                        {t('button_text.read_more')}
                    </MyButton>
                </div>
            </div>
        </Card>
    )
}

export default CardNewsItem