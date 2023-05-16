import * as actions from "../actions/actiontypes"

export const initialState = {
  loading: false,
  article: [],
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      }
    case actions.GET_ARTICLES:
      return {
        ...state,
        article: action.payload,
      }
    default:
      return state
  }
}

export default articleReducer