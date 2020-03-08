import { ADD_COL, ADD_ROW, ADD_ERR } from "../constants/action-types";

const initialState = {
  cols: '', rows: '', errors: ''
};
function rootReducer(state = initialState, action) {
  
  switch (action.type) {
    case ADD_COL:
      state.cols = action.payload;
      break;

    case ADD_ROW:
      state.rows = action.payload;
      break;

    case ADD_ERR:
      state.errors = action.payload;
      break;
  }

  return state;
};
export default rootReducer;
