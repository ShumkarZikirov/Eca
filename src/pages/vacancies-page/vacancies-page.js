import React, {useEffect} from 'react';
import classes from './vacancies-page.module.css';
import { themes } from '../../utils/themes';
import FormVacancies from '../../components/form-vacancies';
import { useForm } from "react-hook-form";
import { postResume } from '../../redux/request/request';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import {Helmet} from 'react-helmet';
import { useTranslation } from "react-i18next";
import '../../utils/i18next';
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';
const VacanciesPage = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

    const { message, loading } = useSelector(state => state.mainReducer);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "all" })
    const dispatch = useDispatch();
    const scroll = Scroll.animateScroll;
	useEffect(() => {
		scroll.scrollTo(0, 0)
	}, [pathname]);
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('resume', data.resume[0]);
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('email', data.email);
        dispatch(postResume(formData))
        reset()
    }

    return (
        <div className={classes.vacanciesPage}>
            <Helmet>
                <title>{t('nav.vacancies')} | Experts of Central Asia</title>
            </Helmet>
            <div style={themes.container}>
                <h1 className={classes.title}>{t("vacancies.title")}</h1>
                <div className={classes.texts}>
                    <p>
                        <strong>{t("vacancies.text1")} </strong> {t("vacancies.text2")}
                    </p>
                    <p>
                        <strong>{t("eca")} </strong>{t("vacancies.text3")}
                    </p>
                    <p>
                        <strong>{t("eca")} </strong>{t("vacancies.text4")}
                    </p>
                    <p>
                        <strong>{t("eca")} </strong> {t("vacancies.text5")}  <a href="mailto:info@eca.kg">info@eca.kg</a> {t("vacancies.text6")}
                        <strong> {t("vacancies.text7")}</strong>
                    </p>
                    <p>{t("vacancies.text8")}</p>
                </div>
                <form
                    encType='multipart/form-data'
                    onSubmit={handleSubmit(onSubmit)} action="">
                    <FormVacancies
                        errors={errors}
                        register={register} />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: 170,
                            marginTop: '50px',
                            marginBottom: '50px',
                            color: '#fff',
                            backgroundColor: '#2D21AD', '&:hover': {
                                backgroundColor: '#2D21AD',
                                color: '#fff',
                            },
                        }}>{loading ? t("button_text.loading") : t('button_text.submit')}</Button>
                    {message && <span className={classes.successMessage}>{message}</span>}
                </form>
            </div>
        </div>
    );
};

export default VacanciesPage;