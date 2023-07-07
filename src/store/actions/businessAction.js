import { FETCH_BUSINESS_SUCCESS } from "./actionType";

const baseUrl = "https://dev-api.fortiusys.com/api/business";

export const fetchBusinessSuccess = (payload) => {
  return {
    type: FETCH_BUSINESS_SUCCESS,
    payload,
  };
};

export const fetchBusiness = () => async (dispatch, getState) => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw {
        name: "Error",
        errors: await response.json(),
      };
    }
    const jsonData = await response.json();
    dispatch(fetchBusinessSuccess(jsonData));
  } catch (err) {
    console.error(err);
    dispatch(err);
  }
};
