import React from 'react';
import PanelItem from "../panel-item";
import styles from "./client-nav.module.css";
import List from "../list";
import { useSelector, useDispatch } from 'react-redux';
import { toggleClientAction } from '../../redux/actions/client-action';
import { getRequestClientId } from '../../redux/request/clientRequest';
const ClientNav = ({ client }) => {
    const { lang } = useSelector(state => state.mainReducer)
    const {clientId} = useSelector(state => state.clientReducer)
    const dispatch = useDispatch();
    
    const handleClick = (id) => {
        dispatch(toggleClientAction(id))
        dispatch(getRequestClientId(id))
    }
    return (
        <div className={styles.clientNav}>
            <List
                items={client && client}
                renderItem={(item => (
                    <PanelItem
                        active={clientId}
                        onClick={() => handleClick(item.id)}
                        {...item}
                        key={item.id}
                    >{lang ? item.title_ru : item.title_en}</PanelItem>
                ))}
            />
        </div>
    )
}

export default ClientNav