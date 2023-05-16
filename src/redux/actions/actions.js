import * as actions from "./actiontypes"
export const setUser = (payload) => {
    return {
      type: actions.SET_USER,
      user: payload,
    };
  };
  export const setLoading = (status) => {
    console.log("Setting loading status to:", status);
  
    return {
      type: actions.SET_LOADING_STATUS,
      status: status,
    };
  };
  export const getArticle =(payload)=>({
      type:  actions.GET_ARTICLES,
    payload: payload,
  })