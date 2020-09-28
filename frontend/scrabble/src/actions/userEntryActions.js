import {
  //   getUserEntryByName,
  postUserEntry,
  getUserEntryList,
} from "../api/userEntry/userEntry";

import {
  FETCH_USER_ENTRY_LIST_SUCCESS,
  FETCH_USER_ENTRY_LIST_REQUEST,
  FETCH_USER_ENTRY_LIST_FAILURE,
  POST_USER_ENTRY_SUCCESS,
  POST_USER_ENTRY_REQUEST,
  POST_USER_ENTRY_FAILURE,
} from "./types";

import { apiErrorHandler } from "../utils/errorhandler";

// ----------------
export const postUserEntryList = (name, word) => (dispatch) => {
  dispatch(postUserEntryListRequest());
  postUserEntry(name, word)
    .then((response) => {
      dispatch(postUserEntryListSuccess(response.data));
    })
    .catch((error) => {
      const errorMessage = apiErrorHandler(error);
      dispatch(postUserEntryListFailure(errorMessage));
    });
};
export const postUserEntryListRequest = () => {
  return {
    type: POST_USER_ENTRY_REQUEST,
  };
};
export const postUserEntryListFailure = (error) => {
  return {
    type: POST_USER_ENTRY_FAILURE,
    error,
  };
};
export const postUserEntryListSuccess = (data) => {
  return {
    type: POST_USER_ENTRY_SUCCESS,
    payload: data,
  };
};

// ------------
export const fetchUserEntryList = () => (dispatch) => {
  dispatch(fetchUserEntryListRequest());
  getUserEntryList()
    .then((response) => {
      dispatch(fetchUserEntryListSuccess(response.data));
    })
    .catch((error) => {
      const errorMessage = apiErrorHandler(error);
      dispatch(fetchUserEntryListFailure(errorMessage));
    });
};
export const fetchUserEntryListRequest = () => {
  return {
    type: FETCH_USER_ENTRY_LIST_REQUEST,
  };
};
export const fetchUserEntryListSuccess = (data) => {
  return {
    type: FETCH_USER_ENTRY_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchUserEntryListFailure = (error) => {
  return {
    type: FETCH_USER_ENTRY_LIST_FAILURE,
    error,
  };
};
