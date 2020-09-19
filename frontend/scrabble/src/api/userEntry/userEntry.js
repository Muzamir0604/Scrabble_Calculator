import axios from "axios";

import {
  USER_ENTRY_LIST,
  USER_ENTRY_POST,
  USER_ENTRIES_BY_NAME,
} from "../constant";

export const getUserEntryList = async () => {
  return await axios.get(USER_ENTRY_LIST);
};

export const postUserEntry = async (name, word) => {
  return await axios.post(
    USER_ENTRY_POST,
    {
      name: name,
      word: word,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const getUserEntryByName = async (name) => {
  return await axios.get(USER_ENTRIES_BY_NAME + name);
};
