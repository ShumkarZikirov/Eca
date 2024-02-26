import {GET_MEMBER_LIST} from "../types";


export const membersAction=(data)=>{
    return{
        type:GET_MEMBER_LIST,
        payload: data
    }
}
