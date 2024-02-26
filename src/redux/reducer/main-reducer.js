import {
  TOGGLE_MENU_ITEM,
  HIDE_MENU_DROPDOWN,
  SHOW_MENU_DROPDOWN,
  TOGGLE_DRAWER,
  TOGGLE_PANEL_SERVICES,
  TOGGLE_PANEL_ABOUT,
  MESSAGE_SUCCESS_RESUME,
  LOADING,
  CHANGE_LANGUAGE,
  GET_VIDEOS
} from "../types";
const defaultState = {
  menuNumber: JSON.parse(localStorage.getItem('eca title')) || null,
  anchorEl: null,
  drawer: false,
  panelId: null,
  aboutNavId:1,
  message: null,
  loading: false,
  lang: false,
  videos: []
};

export const mainReducer = (state = defaultState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_VIDEOS: {
      return {
        ...state,
        videos: payload
      }
    }
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        lang: payload
      }
    }
    case LOADING : {
      return {
        ...state,
        loading: payload
      }
    }
    case TOGGLE_MENU_ITEM: {
      return {
        ...state,
        menuNumber: payload
      }
    }
    case MESSAGE_SUCCESS_RESUME: {
      return {
        ...state,
        message: payload
      }
    }
    case SHOW_MENU_DROPDOWN: {
      return {
        ...state,
        anchorEl: payload
      }
    }
    case HIDE_MENU_DROPDOWN: {
      return {
        ...state,
        anchorEl: payload
      }
    }
    case TOGGLE_DRAWER: {
      return {
        ...state,
        drawer: payload
      }
    }
    case TOGGLE_PANEL_SERVICES: {
      return {
        ...state,
        panelId: payload
      }
    }
    case TOGGLE_PANEL_ABOUT: {
      return {
        ...state,
        aboutNavId: payload
      }
    }
    default:
      return state
  }
}
