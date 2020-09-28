import {
  FETCH_USER_ENTRY_LIST_SUCCESS,
  FETCH_USER_ENTRY_LIST_REQUEST,
  FETCH_USER_ENTRY_LIST_FAILURE,
  POST_USER_ENTRY_SUCCESS,
  POST_USER_ENTRY_REQUEST,
  POST_USER_ENTRY_FAILURE,
} from "../actions/types";

const initialState = {
  name: {},
  word: {},
  score: 0,
  list: [],
  isLoading: false,
  error: [],
};

const userEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ENTRY_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case FETCH_USER_ENTRY_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_USER_ENTRY_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case POST_USER_ENTRY_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        word: action.payload.word,
        score: action.payload.score,
        isLoading: false,
      };
    case POST_USER_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POST_USER_ENTRY_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userEntryReducer;
