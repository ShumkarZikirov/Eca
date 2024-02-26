import {
    GET_CLIENT_CATEGORY_LIST,
    GET_CLIENT_CATEGORY_ID,
    TOGGLE_PANEL_CLIENT,
    LOADING
} from '../types'

const defautltState = {
    client: [],
    client_item: [],
    clientId: 1,
    loading: false
}

export const clientReducer = (state = defautltState, action) => {
    const {type, payload} = action;
    switch(type) {
        case GET_CLIENT_CATEGORY_LIST: {
            return {
                ...state,
                client: payload
            }
        }
        case GET_CLIENT_CATEGORY_ID: {
            return {
                ...state,
                client_item: payload
            }
        }
        case TOGGLE_PANEL_CLIENT: {
            return {
                ...state,
                clientId: payload
            }
        }
        case LOADING : {
            return {
                ...state,
                loading: payload
            }
        }
        default: 
            return state
    }
}