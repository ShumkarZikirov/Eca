import { services } from "../../http/services"
import {
    newActionList,
    newActionDetail,
    newActionImageId,
    newActionLates,
    loadingNews,
    filterNewsAction
} from '../actions/news-action'

export const newRequestFilterYear = (year) => {
    return async (dispatch) => {
        try {
            dispatch(loadingNews(true))
            const response = await services.getNewsFilterYear(year)
            dispatch(filterNewsAction(response.data))
            dispatch(loadingNews(false))
        } catch (e) {
            dispatch(loadingNews(false))
        }
    }
}

export const newRequestList = (page) => {
    return async (dispatch) => {
        try {
            dispatch(loadingNews(true))
            const response = await services.getNewsList(page)
            let hasMore = response.data.results.length === 9;
            dispatch(newActionList(response.data.results, hasMore))
            dispatch(loadingNews(false))

        } catch (e) {
            dispatch(loadingNews(false))
        }
    }
}

export const newRequestLates = () => {
    return async (dispatch) => {
        try {
            const response = await services.getNewsLatest()
            dispatch(newActionLates(response.data))
        } catch (e) {

        }
    }
}

export const newRequestImageId = (id) => {
    return async (dispatch) => {
        try {
            const response = await services.getNewsImagesId(id)
            dispatch(newActionImageId(response.data))
        } catch (e) {

        }
    }
}
export const newRequestDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await services.getNewsDetail(id)
            dispatch(newActionDetail(response.data))
        } catch (e) {

        }
    }
}