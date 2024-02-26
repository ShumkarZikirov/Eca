import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../utils/i18next";
import MyButton from "../my-button";
import styles from "./associated-item.module.css";
import AssociatedItemText from "./associated-item-text";

import List from "../list";
const AssociatedItem = (props) => {
  const {
    description_en,
    description_ru,
    image,
    ecas_roles,
    icon,
    id
  } = props;
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  const onHidden = () => {
    setActive(!active);
  };

  return (
    <div className={styles.item}>
      <div className={styles.main}>
        <div className={styles.image}>
          <img className={styles.img} src={image} alt="" />
        </div>
        <div className={styles.block}>
          <AssociatedItemText ru={description_ru} en={description_en} />
          <div
            style={{
              overflow: active ? "224px" : "hidden",
              height: active ? "100%" : "10px",
            }}
          >
            {
              ecas_roles.length !== 0 ? <p className={styles.eca}>
                {t("media_img_text.title")} <span> {t("eca")} </span>
                {t("media_img_text.title2")}
              </p> : null
            }

            {
              ecas_roles.length !== 0 ? <List
                items={ecas_roles && ecas_roles}
                renderItem={item => (
                  <div className={styles.textItem}>
                    <div className={styles.textIcon}>
                      <img src={icon} alt="star" />
                    </div>
                    <AssociatedItemText ru={item.title_ru} en={item.title_en} />
                  </div>
                )}
              /> : null
            }
          </div>
          <MyButton onClick={onHidden}>
            {active ? t("button_text.hide_text") : t("button_text.read_more")}
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default AssociatedItem;
