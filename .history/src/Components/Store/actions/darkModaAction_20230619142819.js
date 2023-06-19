import { DARK_MODE } from "../types";

export const handledarkMode = (e) => async (dispatch) => {
  localStorage.setItem("darkmode", e);

  //dispatch data to reducer to be accessed as payload.action
  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};
