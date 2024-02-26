import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';
import MainPage from './pages/main-page';
import { useDispatch } from 'react-redux';
import { getCategory, getVideoList } from './redux/request/request';
import { Helmet } from 'react-helmet';
import Logo from './assets/images/servicesNavStar.png';
import { newRequestLates, newRequestList } from "./redux/request/newsRequest"

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    dispatch(getCategory())
    dispatch(newRequestLates())
    dispatch(newRequestList(1))
    dispatch(getVideoList())
  }, [])

  

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <MainPage />
    </>
  );
};


export default App