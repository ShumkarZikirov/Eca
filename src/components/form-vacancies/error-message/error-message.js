import React from 'react';
import classes from '../form-vacancies.module.css';

const ErrorMessage = ({children, width='260px'}) => {
    return (
        <div style={{width: width}} className={classes.errorMessage}>
            {children}
        </div>
    );
};

export default ErrorMessage;