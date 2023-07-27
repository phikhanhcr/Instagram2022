export const BASE_API_BACKEND = "http://localhost:3001";
// export const BASE_API_BACKEND = "";
export const API_UPDATE_IMAGES =
  "https://api.cloudinary.com/v1_1/pklevi/image/upload";

export const BASE_MQTT_URL = "ws://localhost:9083/mqtt";

export const URL_END_POINT = {
  post: {
    feed: "",
    create: "",
    detail: "",
  },
  auth: {
    sign_in: "api/auth/sign-in",
    sign_up: "api/auth/sign-up",
    refresh_token: "api/auth/refresh-token",
  },
  user: {
    me: "api/users/me",
  },
};
