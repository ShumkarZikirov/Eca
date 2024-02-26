import { GET_MEMBER_LIST, GET_MEMBER_ROLE } from "../types";

const defaultState = {
  members: [],
  role: []
}

export const membersReducer = (state = defaultState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_MEMBER_LIST: {
      return {
        ...state,
        members: [...state.members, ...payload]
      }
    }
    default:
      return state
  }

}