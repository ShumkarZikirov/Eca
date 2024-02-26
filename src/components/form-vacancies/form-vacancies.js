import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import classes from './form-vacancies.module.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ErrorMessage from './error-message/error-message';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import '../../utils/i18next';


const FormVacancies = ({ register, errors }) => {
    const { t } = useTranslation();
    const theme = createTheme({
        components: {
            MuiFormLabel: {
                styleOverrides: {
                    asterisk: { color: "red" },
                },
            },
        },
    })
    return (
        <div className={classes.formControl}>
            <FormControl sx={{
                m: 1,
                width: '100%',
                position: 'relative'
            }} variant="outlined">
                <ThemeProvider theme={theme}>
                    <InputLabel
                        sx={{
                            top: -20,
                            fontSize: 20,
                            color: '#424242',
                            fontFamily: 'Raleway',
                            fontWeight: 600,
                        }}
                        FormLabelClasses={{
                            asterisk: classes.labelAsterisk
                        }}
                        required
                        htmlFor="outlined-adornment-password">{t("vacancies.form.text1")}</InputLabel>
                </ThemeProvider>
                <OutlinedInput
                    {...register('first_name', { required: t("vacancies.form.text5") })}
                    name='first_name'
                    error={!!errors.first_name}
                    id="outlined-adornment-password"
                    placeholder={errors.first_name ? null : t("vacancies.form.text5")}
                    startAdornment={
                        <InputAdornment position="start">
                            {errors.first_name ? null : <PermIdentityIcon />}
                        </InputAdornment>
                    }
                />
                {errors.first_name && <ErrorMessage>{errors.first_name?.message}</ErrorMessage>}
            </FormControl>
            <FormControl sx={{
                m: 1,
                width: '100%',
                position: 'relative'
            }} variant="outlined">
                <ThemeProvider theme={theme}>
                    <InputLabel
                        sx={{
                            top: -20,
                            fontSize: 20,
                            color: '#424242',
                            fontFamily: 'Raleway',
                            fontWeight: 600,
                            borderRadius: 10
                        }}
                        required
                        htmlFor="outlined-adornment-password">{t("vacancies.form.text2")}</InputLabel>
                </ThemeProvider>
                <OutlinedInput
                    {...register('last_name', { required: t("vacancies.form.text6") })}
                    name="last_name"
                    error={!!errors.last_name}
                    id="outlined-adornment-password"
                    placeholder={errors.last_name ? null : t("vacancies.form.text6")}
                    startAdornment={
                        <InputAdornment position="start">
                            {errors.last_name ? null : <PermIdentityIcon />}
                        </InputAdornment>
                    }
                />
                {errors.last_name && <ErrorMessage>{errors.last_name?.message}</ErrorMessage>}
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                <InputLabel
                    sx={{
                        top: -20,
                        fontSize: 20,
                        color: '#424242',
                        fontFamily: 'Raleway',
                        fontWeight: 600,
                        borderRadius: 10
                    }}
                    htmlFor="outlined-adornment-password">{t("vacancies.form.text3")}</InputLabel>
                <OutlinedInput
                    {...register('email')}
                    name="email"
                    type='email'
                    placeholder={t("vacancies.form.text7")}
                    id="outlined-adornment-password"
                    startAdornment={
                        <InputAdornment position="start">
                            <MailOutlineIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl>
                <ThemeProvider theme={theme}>
                    <InputLabel
                        sx={{
                            top: -20,
                            fontSize: 20,
                            color: '#424242',
                            fontFamily: 'Raleway',
                            fontWeight: 600,
                            borderRadius: 10
                        }}
                        required
                        htmlFor="outlined-adornment-password">{t("vacancies.form.text4")}</InputLabel>
                </ThemeProvider>
            </FormControl>
            <div className={classes.resume}>
                <div className={classes.fileInput}>
                    {errors.resume ?
                        <input accept="image/*"
                            {...register('resume', { required: 'Please upload your  Resume or CV' })}
                            className={classes.input1}
                            id="contained-button-file"
                            multiple type='file' /> : <input accept="image/*"
                                {...register('resume', { required: 'Please upload your  Resume or CV' })}
                                className={classes.input}
                                id="contained-button-file"
                                multiple type='file' />
                    }
                </div>
                <label htmlFor="contained-button-file">
                    <Button sx={{
                        backgroundColor: '#2D21AD', '&:hover': {
                            backgroundColor: '#2D21AD',
                            color: '#fff',
                        },
                    }}
                        variant="contained"
                        color="primary"
                        component="span">
                         {t("button_text.upload")}
                    </Button>
                </label>
                {errors.resume ? <ErrorMessage width={'308px'}>{errors.resume?.message}</ErrorMessage> : null}
            </div>
            <p className={classes.resumeText}>{t("vacancies.text9")}</p>
        </div>
    );
};

export default FormVacancies;