const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetch: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetch: false,
          error: false,
        };
      case "LOGIN_FAIL":
        return {
          user: null,
          isFetch: true,
          error: true,
        };
      case "UPDATE_START":
        return {
          ...state,
          isFetch: true,
        };
      case "UPDATE_SUCCESS":
        return {
          user: action.payload,
          isFetch: false,
          error: false,
        };
      case "UPDATE_FAIL":
        return {
          user: state.user,
          isFetch: false,
          error: true,
        };
      case "LOGOUT":
        return {
          user: null,
          isFetch: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  