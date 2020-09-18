import {
  FETCH_USER_ENTRY_LIST_SUCCESS,
  FETCH_USER_ENTRY_LIST_REQUEST,
  FETCH_USER_ENTRY_LIST_FAILURE,
} from "../actions/types";

const initialState = {
  name: {},
  word: {},
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
    default:
      return state;
  }
};

export default userEntryReducer;
