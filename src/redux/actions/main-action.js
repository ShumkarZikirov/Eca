import {
  TOGGLE_MENU_ITEM,
  SHOW_MENU_DROPDOWN,
  HIDE_MENU_DROPDOWN,
  TOGGLE_DRAWER,
  TOGGLE_PANEL_SERVICES,
  TOGGLE_PANEL_ABOUT,
  MESSAGE_SUCCESS_RESUME,
  LOADING,
  CHANGE_LANGUAGE,
  GET_VIDEOS
} from '../types';

export const getVideos = (data) => {
  return {
    type: GET_VIDEOS,
    payload: data
  }
}

export const changeLanguageAction = (bool) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: bool
  }
}
export const loaderAction = (bool) => {
  return {
    type: LOADING,
    payload: bool
  }
}
export const messageResume = (message) => {
  return {
    type: MESSAGE_SUCCESS_RESUME,
    payload: message
  }
}
export const togglePanelServices = (id) => {
  return {
    type:TOGGLE_PANEL_SERVICES,
    payload: id
  }
}
export const togglePanelAboutNav = (id) => {
  return {
    type:TOGGLE_PANEL_ABOUT,
    payload: id
  }
}
export const toggleMenuItem = (text) => {
  return {
    type: TOGGLE_MENU_ITEM,
    payload: text
  }
}

export const  openDropdown = (param) => {
  return {
    type: SHOW_MENU_DROPDOWN,
    payload: param
  }
}

export const  closeDropdown = (param) => {
  return {
    type: HIDE_MENU_DROPDOWN,
    payload: param
  }
}

export const toggleDrawer = (boolean) => {
  return {
    type: TOGGLE_DRAWER,
    payload: boolean
  }
}