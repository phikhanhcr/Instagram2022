import axios from "axios";
import jwtDecode from "jwt-decode";
import { BASE_API_BACKEND, URL_END_POINT } from "../config/common";

const isValidToken = async (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const { exp } = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  const isValid = exp > currentTime;

  if (!isValid) {
    const refreshToken = window.localStorage.getItem("refreshToken");
    const response = await axios.post(
      `${BASE_API_BACKEND}/${URL_END_POINT.auth.refresh_token}`,
      {
        refresh_token: refreshToken,
      }
    );
    const result = await response.data;
    if (result.error_code === 0) {
      setSession(result.data.access_token, result.data.refresh_token);
      // dispatch(userInit());
      // dispatch(LOGIN(result));
    } else {
      return false;
    }
  }

  return true;
};

const setSession = (accessToken, refreshToken, user) => {
  if (accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // delete axios.defaults.headers.common.Authorization;
  }
};

const setSessionUser = (user) => {
  if (user) {
    localStorage.setItem("user", user);
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("user");
    // delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession, setSessionUser };
