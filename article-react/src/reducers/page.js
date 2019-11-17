import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL
} from "../actions/PageActions";

const initialState = {
  isFetching: false,
  error: ""
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return { ...state, id: action.payload, isFetching: true, error: "" };
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isFetching: false,
        error: ""
      };
    case GET_ARTICLE_FAIL:
      return { ...state, error: action.payload.message, isFetching: false };
    default:
      return state;
  }
}
