import React from 'react'
import styles from "./service-item.module.css"

const ServiceItem = ({ children, img }) => {
 
    return (
        <div className={styles.wrapper}>
            <div className={styles.starsItem}>
                <div className={styles.starsImg}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.starsText}>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem