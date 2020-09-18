import axios from "axios";

import { SCORE_TABLE_LIST } from "../constant";

export const getScoreTableList = async () => {
  return await axios.get(SCORE_TABLE_LIST);
};
