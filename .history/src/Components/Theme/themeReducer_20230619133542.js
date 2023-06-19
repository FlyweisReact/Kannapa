
const initialState = {
    theme: 'light',
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return {
          ...state,
          theme: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;



  export const setTheme = (theme) => {
    return {
      type: 'SET_THEME',
      payload: theme,
    };
  };