import {
    getProjectlistAction,
    getProjectIdAction,
    getProjectSectorAction,
    getProjectSearchAction,
    loadingProject,
    getProjectYearAction
} from '../actions/project-action'
import { services } from '../../http/services'

export const getRequestProjectList = (page) => {
    return async (dispatch) => {
        try {
            dispatch(loadingProject(true))
            const response = await services.getProject(page)
            dispatch(getProjectlistAction(response.data.results))
            dispatch(loadingProject(false))
        } catch (e) {
            dispatch(loadingProject(false))
        }
    }
}

export const getRequestProjectYear = (year) => {
    return async (dispatch) => {
        dispatch(loadingProject(true))
        try {
            const response = await services.getFilterProjectYear(year)
            dispatch(getProjectYearAction(response.data))
            dispatch(loadingProject(false))
        } catch (e) {
            dispatch(loadingProject(false))
        }
    }
}

export const getRequestProjectSearch = (body) => {
    return async (dispatch) => {
        dispatch(loadingProject(true))
        try {
            const response = await services.getFilterProjectSearch(body)
            dispatch(getProjectSearchAction(response.data))
            dispatch(loadingProject(false))
        } catch (e) {

        }
    }
}


export const getRequestProjectSector = (sector) => {
    return async (dispatch) => {
        dispatch(loadingProject(true))
        try {
            const response = await services.getFilterProjectSector(sector)
            dispatch(getProjectSectorAction(response.data))
            dispatch(loadingProject(false))
        } catch (e) {

        }
    }
}

export const getRequestProjectId = (id) => {
    return async (dispatch) => {
        dispatch(loadingProject(true))
        try {
            const response = await services.getFilterProjectId(id)
            dispatch(loadingProject(false))
            dispatch(getProjectIdAction(response.data))
        } catch (e) {
            dispatch(loadingProject(false))

        }
    }
}