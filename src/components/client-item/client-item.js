import React from "react";
import styles from "./client-item.module.css";
import { useNavigate } from "react-router-dom";
const ClientItem = ({ img, children, imgIcon, id }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.clientItem}>
            <div className={styles.content}>
                <div className={styles.contentImg}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.contentText}>
                    {children}
                </div>
                <div onClick={() => navigate(`/company/${id}`)} className={styles.contentIcon}>
                    <img src={imgIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClientItem;