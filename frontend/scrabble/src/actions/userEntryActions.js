import {
  //   getUserEntryByName,
  //   postUserEntry,
  getUserEntryList,
} from "../api/userEntry/userEntry";

import {
  FETCH_USER_ENTRY_LIST_SUCCESS,
  FETCH_USER_ENTRY_LIST_REQUEST,
  FETCH_USER_ENTRY_LIST_FAILURE,
} from "./types";

import { apiErrorHandler } from "../utils/errorhandler";

export const fetchUserEntryList = () => (dispatch) => {
  dispatch(fetchUserEntryListRequest());
  getUserEntryList()
    .then((response) => {
      dispatch(fetchUserEntryListSuccess(response.data));
    })
    .catch((error) => {
      const errorMessage = apiErrorHandler(error);
      dispatch(fetchShortListFailure(errorMessage));
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

export const fetchShortListFailure = (error) => {
  return {
    type: FETCH_USER_ENTRY_LIST_FAILURE,
    error,
  };
};
