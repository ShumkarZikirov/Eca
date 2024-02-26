import  {
    GET_NEWS_LIST,
    GET_NEWS_LATES,
    GET_NEWS_IMAGE_ID,
    GET_NEWS_DETAIL,
    LOADING_NEWS,
    FILTER_NEWS_YEAR
} from '../types'


export const filterNewsAction = (data) => {
    return {
        type: FILTER_NEWS_YEAR,
        payload: data
    }
}

export const loadingNews = (bool) => {
    return {
        type: LOADING_NEWS,
        payload: bool
    }
}

export const newActionList = (data, hasMore) => {
    return {
        type: GET_NEWS_LIST,
        payload: data,
        hasMore
    }
}
export const newActionLates = (data) => {
    return {
        type: GET_NEWS_LATES,
        payload: data
    }
}
export const newActionImageId = (data) => {
    return {
        type: GET_NEWS_IMAGE_ID,
        payload: data
    }
}

export const newActionDetail = (data) => {
    return {
        type: GET_NEWS_DETAIL,
        payload: data
    }
}