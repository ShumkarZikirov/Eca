import {
    GET_PROJECT_ITEM_YEAR,
    GET_PROJECT_LIST,
    GET_PROJECT_ITEM_ID,
    LOADING,
    GET_PROJECT_ITEM_SEARCH,
    GET_PROJECT_ITEM_SECTOR
} from '../types'

const defaultState = {
    projects: [],
    item: [],
    loading: false
}

export const projectReducer = (state = defaultState, action) => {
    const {payload, type} = action;
    switch(type) {
        case LOADING: {
            return {
                ...state,
                loading: payload
            }
        }
        case GET_PROJECT_LIST: {
            return {
                ...state,
                projects: [...state.projects, ...payload]
            }
        }
        case GET_PROJECT_ITEM_ID : {
            return {
                ...state,
                item: payload
            }
        }
        case GET_PROJECT_ITEM_SECTOR: {
            return {
                ...state,
                projects: payload
            }
        }
        case GET_PROJECT_ITEM_YEAR: {
            return {
                ...state,
                projects: payload
            }
        }
        case GET_PROJECT_ITEM_SEARCH: {
            return {
                ...state,
                projects: payload
            }
        }
        default: 
            return state
    }
}