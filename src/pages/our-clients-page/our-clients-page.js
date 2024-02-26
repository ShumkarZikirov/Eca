import React, { useEffect } from 'react';
import classes from './our-clients-page.module.css';
import { themes } from '../../utils/themes';
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { getRequestClientList } from '../../redux/request/clientRequest';
import { useDispatch, useSelector } from 'react-redux';
import ClientNav from '../../components/client-nav';
import ClientContent from '../../components/client-content';
import { Helmet } from "react-helmet";
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';
const OurClientsPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { client } = useSelector(state => state.clientReducer);
    const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();

    useEffect(() => {
        scroll.scrollTo(0, 0)
    }, [pathname]);
    useEffect(() => {
        dispatch(getRequestClientList())
    }, [client.length])

    return (
        <div className={classes.ourClientsPage}>
            <Helmet>
                <title>{t('nav.ourClients')} | Experts of Central Asia</title>
            </Helmet>
            <div style={themes.container}>
                <h1 className={classes.title}>{t("our_clients.title")}</h1>
                <div className={classes.block}>
                    <div className={classes.nav}>
                        <ClientNav client={client} />
                    </div>
                    <div className={classes.content}>
                        <ClientContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClientsPage;