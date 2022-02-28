import * as api from "../api/index";

export const userRegister = (data) => async (dispatch) => {
  try {
    const response = await api.userRegister(data);
    console.log("Register successfull");
    dispatch({ type: "REGISTER", payload: response });
  } catch (err) {
    console.log(`Error in userRegisteration: ${err}`);
  }
};

export const userLogin = (data) => async (dispatch) => {
  try {
    const response = await api.userLogin(data);
    console.log("login succesfull");

    dispatch({ type: "LOGIN", payload: response });
  } catch (err) {
    console.log(`Error in userLogin: ${err}`);
  }
};
