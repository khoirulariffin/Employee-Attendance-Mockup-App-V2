import { FETCH_COMPANYLOCATION_SUCCESS } from "./actionType";

const baseUrl = "https://dev-api.fortiusys.com/api/location";

export const fetchCompanyLocationSuccess = (payload) => {
  return {
    type: FETCH_COMPANYLOCATION_SUCCESS,
    payload,
  };
};

export const fetchCompanyLocation = () => async (dispatch, getState) => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw {
        name: "Error",
        errors: await response.json(),
      };
    }
    const jsonData = await response.json();
    dispatch(fetchCompanyLocationSuccess(jsonData));
  } catch (err) {
    console.error(err);
    dispatch(err);
  }
};
