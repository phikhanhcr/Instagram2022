import axios from "axios";
import { isValidToken } from "./jwt";

const getData = async (url) => {
  const accessToken = window.localStorage.getItem("accessToken");
  if (accessToken && (await isValidToken(accessToken))) {
    const optionFetch = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    };
    try {
      const response = await axios.get(url, optionFetch);
      const data = response.data;
      if (data.data) {
        return data.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }
};

const postData = async (url, body) => {
  const accessToken = window.localStorage.getItem("accessToken");
  if (accessToken && (await isValidToken(accessToken))) {
    const optionFetch = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    };
    try {
      const response = await axios.get(url, body, optionFetch);
      const data = response.data;
      if (data.data) {
        return data.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }
};

export const AxiosHelper = {
  get: getData,
  post: postData,
};
