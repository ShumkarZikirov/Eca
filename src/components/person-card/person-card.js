import React from 'react';
import classes from './person-card.module.css';
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/Instagram.png'
import Linkedin from '../../assets/images/Linkedin.png'
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
const PersonCard = ({ name, profecial, link, img }) => {
    return (
        <div className={classes.personCard}>
            {
                link ? (
                    <Link to={link}>
                        <CardActionArea>
                            <div className={classes.image}>
                                <img src={img} alt="" />
                            </div>
                        </CardActionArea>
                        <h4 className={classes.profecial}>{profecial}</h4>
                        <h2 className={classes.name}>{name}</h2>
                    </Link>
                ) :
                    <>
                        <CardActionArea>
                            <div className={classes.image}>
                                <img src={img} alt="" />
                            </div>
                        </CardActionArea>
                        <h4 className={classes.profecial}>{profecial}</h4>
                        <h2 className={classes.name}>{name}</h2>
                    </>
            }
            <div className={classes.social}>
                <a href=''>
                    <img src={Linkedin} alt='' />
                </a>
                <a href=''>
                    <img src={Facebook} alt='' />
                </a>
                <a href=''>
                    <img src={Instagram} alt='' />
                </a>
            </div>
        </div>
    );
};

export default PersonCard;