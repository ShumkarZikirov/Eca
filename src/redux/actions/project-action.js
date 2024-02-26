import {
    GET_PROJECT_ITEM_YEAR,
    GET_PROJECT_ITEM_SECTOR,
    GET_PROJECT_ITEM_SEARCH,
    GET_PROJECT_LIST,
    GET_PROJECT_ITEM_ID,
    LOADING
} from '../types'

export const loadingProject = (bool) => {
    return {
        type: LOADING,
        payload: bool
    }
}
export const getProjectlistAction = (data) => {
    return {
        type: GET_PROJECT_LIST,
        payload: data
    }
}
export const getProjectYearAction = (data) => {
    return {
        type: GET_PROJECT_ITEM_YEAR,
        payload: data
    }
}
export const getProjectSectorAction = (data) => {
    return {
        type: GET_PROJECT_ITEM_SECTOR,
        payload: data
    }
}
export const getProjectIdAction = (data) => {
    return {
        type: GET_PROJECT_ITEM_ID,
        payload: data
    }
}
export const getProjectSearchAction = (data) => {
    return {
        type: GET_PROJECT_ITEM_SEARCH,
        payload: data
    }
}