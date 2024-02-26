import React from "react"
import styles from "./panel-item.module.css"

const PanelItem = (props) => {
    const { image, id, onClick, children, active, _id } = props;
    return (
        <div
            id={"Values"}
            style={active === id ? { background: "#33bee5" } : null}
            onClick={onClick}
            className={styles.content}>
            <div className={styles.contentImg}>
                <img src={image} alt="" />
            </div>
            <div className={styles.itemText}>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default PanelItem;