"use strict";
exports.__esModule = true;
exports.URL_END_POINT = exports.BASE_MQTT_URL = exports.API_UPDATE_IMAGES = exports.BASE_API_CHAT = exports.BASE_API_NOTIFICATION = exports.BASE_API_BACKEND = void 0;
exports.BASE_API_BACKEND = "http://localhost:3001";
exports.BASE_API_NOTIFICATION = "http://localhost:3002";
exports.BASE_API_CHAT = "http://localhost:3003";
// export const BASE_API_BACKEND = "";
exports.API_UPDATE_IMAGES = "https://api.cloudinary.com/v1_1/pklevi/image/upload";
exports.BASE_MQTT_URL = "ws://localhost:9083/mqtt";
exports.URL_END_POINT = {
    post: {
        feed: "",
        create: "",
        detail: ""
    },
    auth: {
        sign_in: "api/auth/sign-in",
        sign_up: "api/auth/sign-up",
        refresh_token: "api/auth/refresh-token"
    },
    user: {
        me: "api/users/me"
    }
};
