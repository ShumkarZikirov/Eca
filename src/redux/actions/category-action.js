import { GET_CATEGORY_ITEM, GET_CATEGORY_LIST, LOADING_CATEGORY } from "../types";

export const getActionCategoryList = (data) => {
    return {
        type: GET_CATEGORY_LIST,
        payload: data
    }
}   

export const loadingCategory = (bool) => {
    return {
        type: LOADING_CATEGORY,
        payload: bool
    }
}

export const getActionCategoryItem = (data) => {
    return {
        type: GET_CATEGORY_ITEM,
        payload: data
    }
}  