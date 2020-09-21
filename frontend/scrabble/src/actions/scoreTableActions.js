import { getScoreTableList } from "../api/scoreTable/scoreTable";

import {
  FETCH_SCORE_TABLE_SUCCESS,
  FETCH_SCORE_TABLE_REQUEST,
  FETCH_SCORE_TABLE_FAILURE,
} from "./types";

import { apiErrorHandler } from "../utils/errorhandler";

export const fetchScoreTableList = () => (dispatch) => {
  dispatch(fetchScoreTableListRequest());
  getScoreTableList()
    .then((response) => {
      dispatch(fetchScoreTableListSuccess(response.data));
    })
    .catch((error) => {
      const errorMessage = apiErrorHandler(error);
      dispatch(fetchScoreTableListFailure(errorMessage));
    });
};
export const fetchScoreTableListRequest = () => {
  return {
    type: FETCH_SCORE_TABLE_REQUEST,
  };
};
export const fetchScoreTableListSuccess = (data) => {
  return {
    type: FETCH_SCORE_TABLE_SUCCESS,
    payload: data,
  };
};
export const fetchScoreTableListFailure = (error) => {
  return {
    type: FETCH_SCORE_TABLE_FAILURE,
    error,
  };
};
