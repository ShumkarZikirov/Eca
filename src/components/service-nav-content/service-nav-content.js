import React from "react";
import classes from "./service-nav-content.module.css";
import { useSelector } from "react-redux";
import List from "../list";
import ServiceItem from "./service-item";
import Star from "../../assets/images/servicesNavStar.png";
import parse from 'html-react-parser';
import Loader from "../loader/loader";
const ServiceNavContent = () => {
    const { item, category, loading } = useSelector((state) => state.categorytReducer);
    const { lang, panelId } = useSelector((state) => state.mainReducer);
    const filter = category.find(e => e.id === panelId);
    if (loading) {
        return <Loader />
    }
    return (
        <div className={classes.serviceNavContent}>
            <div className={classes.wrapper}>
                <div className={classes.top}>
                    <div className={classes.image}>
                        <img src={filter && filter.image_main} alt="" />
                    </div>
                    <div className={classes.description}>
                        {lang ? filter && parse(filter.description_ru) : filter && parse(filter.description_en)}
                    </div>
                </div>
                <List
                    items={item && item}
                    renderItem={(elem) => (
                        <ServiceItem
                            {...elem}
                            key={elem.id}
                            img={Star}
                        >
                            {lang ? elem.denotation_ru : elem.denotation_en}
                        </ServiceItem>
                    )}
                />
            </div>
        </div>
    );
};

export default ServiceNavContent;
