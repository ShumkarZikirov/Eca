import {
    GET_NEWS_LIST,
    GET_NEWS_LATES,
    GET_NEWS_IMAGE_ID,
    GET_NEWS_DETAIL,
    LOADING_NEWS,
    FILTER_NEWS_YEAR
} from '../types'

const defaultState = {
    list: [],
    lates: [],
    images: [],
    item: {},
    loading: false,
    hasMore: true
}

export const newsReducer = (state = defaultState, action) => {
    const { type, payload, hasMore } = action;
    switch (type) {
        case FILTER_NEWS_YEAR: {
            return {
                ...state,
                list: payload
            }
        }
        case LOADING_NEWS: {
            return {
                ...state,
                loading: payload
            }
        }
        case GET_NEWS_LIST: {
            const newList = payload.reduce((accumulator, currentItem) => {
                if (!accumulator.some((item) => item.id === currentItem.id)) {
                    accumulator.push(currentItem);
                }
                return accumulator;
            }, [...state.list]);

            return {
                ...state,
                list: newList,
                hasMore: hasMore
            };
        }
        case GET_NEWS_LATES: {
            return {
                ...state,
                lates: payload
            }
        }
        case GET_NEWS_IMAGE_ID: {
            return {
                ...state,
                images: payload
            }
        }
        case GET_NEWS_DETAIL: {
            return {
                ...state,
                item: payload
            }
        }
        default:
            return state
    }
}