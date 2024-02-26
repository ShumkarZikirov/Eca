import React, { useEffect } from 'react'
import AssociatedImg from '../../assets/images/AssociatedMembers.png'
import AssociatedItem from '../../components/associated-item'
import MediaImage from '../../components/media-image'
import { themes } from '../../utils/themes'
import styles from './associated-members-page.module.css';
import "../../utils/i18next"
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { getMembersList } from "../../redux/request/request"
import List from "../../components/list"
import Star from "../../assets/images/servicesNavStar.png"
import { Helmet } from 'react-helmet';
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom'
const AssociatedMembersPage = () => {
  const dispatch = useDispatch()
  const { members } = useSelector(state => state.membersReducer)
  const scroll = Scroll.animateScroll;
	const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollTo(0, 0)
  }, [pathname]);
  useEffect(() => {
    dispatch(getMembersList())
  }, [])
  


  const { t } = useTranslation()
  return (
    <div className={styles.associated}>
      <Helmet>
        <title>{t('media_img_text.associated')} | Experts of Central Asia</title>
      </Helmet>
      <div style={themes.container}>
        <MediaImage
          number='80'
          image={AssociatedImg}
          title={t('media_img_text.associated')}
          color={'#393184'}
        />
        <List items={members && members}
          renderItem={(item => (
            <AssociatedItem
              {...item}
              key={item.id}
              icon={Star}
            />
          ))}
        />
      </div>
    </div>
  )
}
export default AssociatedMembersPage
