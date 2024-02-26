import React, { useState } from 'react';
import styles from './contact-us.module.css';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InputBase from '@mui/material/InputBase';
import MyPaper from '../my-paper';
import MyButton from '../my-button';
import '../../utils/i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { postContactRequest } from '../../redux/request/request';
const defaultState = {
  full_name: '',
  email: '',
  phone_number: '',
  message: ''
}
const ContactUs = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [form, setForm] = useState('');
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postContactRequest(form))
    setForm(defaultState)
  }
  return (
    <div className={styles.contactUs}>
      <h1 className={styles.title}>{t('form.title')}</h1>
      <form onSubmit={handleSubmit} className={styles.form} action="">
        <MyPaper>
          <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <InputBase
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            sx={{ ml: 1, flex: 1, fontSize: 20 }}
            placeholder={t('form.name')}
          />
        </MyPaper>
        <MyPaper>
          <MailOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <InputBase
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            sx={{ ml: 1, flex: 1, fontSize: 20 }}
            placeholder={t('form.email')}
          />
        </MyPaper>
        <MyPaper>
          <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <InputBase
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
            sx={{ ml: 1, flex: 1, fontSize: 20 }}
            placeholder={t('form.phone')}
          />
        </MyPaper>
        <MyPaper>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className={styles.textarea}
            placeholder={t('form.message')}
            style={{
              border: 'none',
              outline: 'none',
              resize: 'none',
              width: '100%',
              height: '248px'
            }}></textarea>
        </MyPaper>
        <div style={{textAlign: 'center'}}>
          <MyButton type="submit">{t("button_text.send_message")}</MyButton>
        </div>
      </form>
    </div >
  );
};

export default ContactUs;