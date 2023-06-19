import { DARK_MODE } from "../types";

// initial state
const initialState = {
  isdarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        // getting value from the action file and changing isdarkMode State.
        isdarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
