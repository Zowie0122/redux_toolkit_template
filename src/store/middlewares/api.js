import axios from "axios";

export const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type !== "api") return next(action);
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const res = await axios.request({
      url,
      method,
      data
    });

    dispatch({ type: onSuccess, payload: res.data });
  } catch (err) {
    dispatch({ type: onError, payload: err });
  }
};
