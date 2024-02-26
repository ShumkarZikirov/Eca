import {
    GET_CLIENT_CATEGORY_LIST,
    GET_CLIENT_CATEGORY_ID,
    TOGGLE_PANEL_CLIENT,
    LOADING
} from '../types'

export const clientLoading = (bool) => {
    return {
        type: LOADING,
        payload: bool
    }
}

export const clientCategoryAction = (data) => {
    return {
        type: GET_CLIENT_CATEGORY_LIST,
        payload: data
    }
}

export const clientCategoryIdAction = (data) => {
    return {
        type: GET_CLIENT_CATEGORY_ID,
        payload: data
    }
}


export const toggleClientAction = (id) => {
    return {
        type: TOGGLE_PANEL_CLIENT,
        payload: id
    }
}