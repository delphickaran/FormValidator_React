import {
  LOGIN_INITIATED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTRATION_INITIATED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
} from "../actionTypes";

export const submitRegistrationForm = (formFields) => {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTRATION_INITIATED });
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            code: 200,
            responseObject: formFields,
          });
        }, 3000);
      });
      dispatch({ type: REGISTRATION_SUCCESS, payload: response });
    } catch (err) {
      dispatch({ type: REGISTRATION_FAIL, payload: err });
    }
  };
};

export const login = (formFields, registrationData) => {
  const { responseObject } = registrationData;
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_INITIATED });
      const response = await new Promise((resolve, reject) => {
        console.log(formFields);
        console.log(registrationData);
        setTimeout(() => {
          if (
            responseObject &&
            formFields.email === responseObject.email &&
            formFields.password === responseObject.password
          ) {
            resolve({
              code: 200,
              responseObject: formFields,
            });
          } else {
            reject({
              code: 401,
              responseObject: { message: "Invalid credentials" },
            });
          }
        }, 3000);
      });
      dispatch({ type: LOGIN_SUCCESS, payload: response });
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err });
    }
  };
};
