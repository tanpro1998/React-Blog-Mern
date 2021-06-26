export const UPDATEStart = (userCreadentials) => ({
    type: "LOGIN_START",
  });
  
  export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const loginFail = () => ({
    type: "LOGIN_FAIL",
  });
  
  export const logOut = () => ({
    type: "LOGOUT",
  });
  
  export const updateStart = (userCreadentials) => ({
    type: "UPDATE_SUCCESS",
  });
  
  export const updateSuccess = (user) => ({
    type: "UPDATE_FAIL",
    payload: user,
  });
  
  export const updateFail = () => ({
    type: "UPDATE_FAIL",
  });
  