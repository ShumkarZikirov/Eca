import React from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
const CardNewsItemText = ({ titleEn, titleRu }) => {
    const { lang } = useSelector(state => state.mainReducer);
    return (
        <Typography sx={{
            fontSize: '18px',
            marginTop: '10px',
            height: "125px",
            overflow: 'hidden',
        }} variant="body2" color="text.secondary">
            {
                lang ? titleRu : titleEn
            }
        </Typography>
    );
};

export default CardNewsItemText;