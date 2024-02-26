import { services } from "../../http/services"
import {
    clientCategoryAction,
    clientCategoryIdAction,
    clientLoading
} from '../actions/client-action'

export const getRequestClientId = (id) => {
    return async (dispatch) => {
        dispatch(clientLoading(true))
        try {
            const response = await services.getClientCategoryId(id)
            dispatch(clientLoading(false))
            dispatch(clientCategoryIdAction(response.data))
        } catch(e) {
            dispatch(clientLoading(false))
        }
    }
}

export const getRequestClientList = () => {
    return async (dispatch) => {
        try {
            const response = await services.getClientCategoryList()
            dispatch(clientCategoryAction(response.data))
            dispatch(getRequestClientId(response.data[0].id))
        } catch(e) {

        }
    }
}

