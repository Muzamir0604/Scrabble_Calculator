import {
  FETCH_SCORE_TABLE_SUCCESS,
  FETCH_SCORE_TABLE_REQUEST,
  FETCH_SCORE_TABLE_FAILURE,
} from "../actions/types";

const initialState = {
  list: {},
  isLoading: false,
  error: [],
};

const scoreTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCORE_TABLE_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case FETCH_SCORE_TABLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_SCORE_TABLE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
export default scoreTableReducer;
