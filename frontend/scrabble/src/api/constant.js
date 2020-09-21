export const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_PROD_API_URL;

export const USER_ENTRY_LIST = API_URL + "/scrabble/";
export const USER_ENTRY_POST = USER_ENTRY_LIST;
export const USER_ENTRIES_BY_NAME = API_URL + "?name=";

export const SCORE_TABLE_LIST = API_URL + "/score-table/";
