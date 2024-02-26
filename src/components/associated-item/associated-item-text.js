import React from 'react'
import { useSelector } from 'react-redux'
import parse from "html-react-parser"
import styles from "./associated-item.module.css";

const AssociatedItemText = ({ru, en}) => {
    const { lang } = useSelector(state => state.mainReducer)
    const html_ru = typeof parse(ru) === 'string' ? null: parse(ru) 
    const html_en = typeof parse(en) === 'string' ? null: parse(en) 
    return (
        <p className={styles.text}>
            {lang ? html_ru : html_en}
        </p>
    )
}

export default AssociatedItemText