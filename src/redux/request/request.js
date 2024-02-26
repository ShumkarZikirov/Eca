import { services } from "../../http/services"
import {
    getActionCategoryItem,
    getActionCategoryList,
    loadingCategory
} from "../actions/category-action";
import {
    messageResume,
    loaderAction,
    togglePanelServices,
    getVideos
} from '../actions/main-action';

import { membersAction } from "../actions/members-action"


export const getCategoryItem = (id) => {
    return async (dispatch) => {
        dispatch(loadingCategory(true))
        try {
            const response = await services.getServiceFilter(id)
            dispatch(getActionCategoryItem(response.data))
            dispatch(loadingCategory(false))
        } catch (e) {
            dispatch(loadingCategory(false))
        }
    }
}
export const getCategory = () => {
    return async (dispatch) => {
        try {
            const response = await services.getServiceCategory()
            dispatch(getActionCategoryList(response.data))
            dispatch(getCategoryItem(response.data[0].id))
            dispatch(togglePanelServices(response.data[0].id))
        } catch (e) {
        }
    }
}
export const postResume = (form) => {
    return async (dispatch) => {
        dispatch(loaderAction(true))
        try {
            await services.uploadResume(form)
            dispatch(messageResume('Your Resume / CV was successfully sent. Our staff will contact you as soon as possible'))
            setTimeout(() => {
                dispatch(messageResume(null))
            }, 6000)
            dispatch(loaderAction(false))
        } catch (e) {
            dispatch(loaderAction(false))
        }
    }
}

export const postContactRequest = (body) => {
    return async (dispatch) => {
        try {
            await services.postContact(body)
        } catch (e) {
        }
    }
}

// members
export const getMembersList = () => {
    return async (dispatch) => {
        try {
            const response = await services.getMembers()
            dispatch(membersAction(response.data))
        } catch (e) {
        }
    }
}

// video 
export const getVideoList = () => {
    return async (dispatch) => {
        try {
            const response = await services.getVideo()
            dispatch(getVideos(response.data))
        } catch (e) {
        }
    }
}