import React, { useEffect } from "react";
import styles from "./service-nav.module.css";
import PanelItem from '../panel-item'
import { useSelector, useDispatch } from 'react-redux';
import { togglePanelServices } from "../../redux/actions/main-action";
import List from "../list";
import { getCategoryItem } from "../../redux/request/request";

const ServiceNav = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(state => state.categorytReducer);
  const { panelId, lang } = useSelector(state => state.mainReducer);
  const toggleActive = (id) => {
    dispatch(togglePanelServices(id))
    dispatch(getCategoryItem(id))
  }
  return (
    <div className={styles.serviceNav}>
      <List items={category && category}
        renderItem={(item => (
          <PanelItem
            active={panelId}
            onClick={() => toggleActive(item.id)}
            key={item.id}ф
            {...item}>
            {lang ? item.title_ru : item.title_en}
          </PanelItem>
        ))}
      />
    </div>
  );
};

export default ServiceNav;
