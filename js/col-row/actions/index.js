import { ADD_COL, ADD_ROW, ADD_ERR } from "../constants/action-types";

export function addCols(payload) {
  return { type: "ADD_COL", payload }
};

export function addRows(payload) {
  return { type: "ADD_ROW", payload }
};

export function addErrors(payload) {
  return { type: "ADD_ERR", payload }
};
