import {
    GET_CATEGORY_ITEM,
    GET_CATEGORY_LIST,
    LOADING_CATEGORY
} from "../types";

const defaultState = {
    category: [],
    item: [],
    loading: false
}

export const categorytReducer = (state = defaultState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_CATEGORY_LIST: {
            return {
                ...state,
                category: payload
            }
        }
        case GET_CATEGORY_ITEM: {
            return {
                ...state,
                item: payload
            }
        }
        case LOADING_CATEGORY: {
            return {
                ...state,
                loading: payload
            }
        }
        default:
            return state
    }
}