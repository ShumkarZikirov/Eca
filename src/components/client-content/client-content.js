import React from 'react';
import List from "../list";
import nextIcon from '../../assets/images/nextIcon.png'
import ClientItem from "../client-item"
import styles from "./client-content.module.css"
import { useSelector } from 'react-redux'
import parse from 'html-react-parser';
import Loader from '../loader/loader';
const ClientContent = () => {
    const { client_item, loading } = useSelector(state => state.clientReducer);
    const { lang } = useSelector(state => state.mainReducer);
    if (loading) {
        return <div style={{
            float: 'left'
        }}>
            <Loader />
        </div>
    }
    return (
        <div className={styles.clientContent}>
            <List items={client_item && client_item}
                renderItem={(item => (
                    <ClientItem
                        id={item.id}
                        key={item.id}
                        img={item.image}
                        imgIcon={nextIcon}
                    >
                        {lang ? parse(item.content_ru) : parse(item.content_en)}
                    </ClientItem>
                ))}
            />

        </div>
    )
}

export default ClientContent