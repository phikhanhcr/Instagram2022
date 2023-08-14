import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setSession, isValidToken, setSessionUser } from "../../../utils/jwt";
import { toast } from "react-toastify";
import { useCallback } from "react";
import {
  BASE_API_BACKEND,
  BASE_MQTT_URL,
  URL_END_POINT,
} from "../../../config/common";
import axios from "axios";
import mqtt from "mqtt";
import { MqttSubscribeTopic } from "../../../services/mqtt";
const initialState = {
  user: {},
  isAuthenticated: false,
  isInitialized: false,
  status: null,
  isLoading: false,
  hasError: false,
  notifications: {
    newMessages: 0,
    newNotification: 0,
  },
};

// ASYNC-FUNCTIONS-----------------------------------------------------------------
const userInit = createAsyncThunk(
  "user/init",
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(`${BASE_API_BACKEND}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`,
          },
        });
        const { data } = response;
        const user = data.data;
        dispatch(
          INITIALIZE({
            isAuthenticated: true,
            user,
          })
        );
        setSessionUser(user);
        MqttSubscribeTopic.global(user.id);
      } else {
        dispatch(
          INITIALIZE({
            isAuthenticated: false,
            user: null,
          })
        );
        return rejectWithValue("Session expired, plz login to go go go");
      }
    } catch (err) {
      dispatch(
        INITIALIZE({
          isAuthenticated: false,
          user: null,
        })
      );
    }
  }
);

const userLogin = createAsyncThunk(
  "user/login",
  async (userInfo, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_API_BACKEND}/${URL_END_POINT.auth.sign_in}`,
        {
          ...userInfo,
        }
      );
      const data = response.data;
      if (data.error_code === 0) {
        setSession(data.data.token.access_token, data.data.token.refresh_token);
        dispatch(userInit());
        dispatch(LOGIN(data.data.user));
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data.message);
    }
  }
);

const userRegister = createAsyncThunk(
  "user/register",
  async (userInfo, { dispatch, rejectWithValue, fulfilled }) => {
    try {
      const response = await axios.post(
        `${BASE_API_BACKEND}/${URL_END_POINT.auth.sign_up}`,
        {
          ...userInfo,
        }
      );
      const data = response.data;
      setSession(data.token, data.refreshToken);
      dispatch(userInit());
      dispatch(LOGIN(data.data.user));
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data.message);
    }
  }
);

// AUTH-FUNCTIONS-----------------------------------------------------------------

export const AuthFunctions = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isInitialized, isLoading } = useSelector(
    (state) => state.user
  );
  const user = useSelector((state) => (state.user.user ? state.user.user : {}));

  const initialize = useCallback(() => {
    dispatch(userInit());
  }, [dispatch]);

  const register = (userInfo) => {
    dispatch(userRegister(userInfo));
  };
  const login = (userInfo) => {
    dispatch(userLogin(userInfo));
  };
  const logout = () => {
    dispatch(LOGOUT());
  };

  return {
    login,
    initialize,
    register,
    logout,
    isAuthenticated,
    isInitialized,
    isLoading,
    user,
  };
};

// SLICE-----------------------------------------------------------------

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    REGISTER: (state, action) => {
      state.isAuthenticated = false;
    },
    LOGIN: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    INITIALIZE: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isInitialized = true;
      state.user = action.payload.user;
    },
    LOGOUT: (state, action) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state) => {
      state.status = "SUCCESS";
      state.isLoading = false;
      // userSocket.emit("sign-in", state.user.id);
      toast.success(
        `Welcome back, ${
          state.user.username ? state.user.username : state.user.email
        } 🔥🔥`
      );
    },
    [userLogin.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
      toast.error(action?.payload);
    },

    [userRegister.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [userRegister.fulfilled]: (state) => {
      console.log("fullfied");
      state.status = "SUCCESS";
      state.isLoading = false;
      // userSocket.emit("sign-in", state.user.id);

      // const navigate = useNavigate();
      // navigate("/login");
      // toast.success(
      //   `Welcome , ${
      //     state.user.username ? state.user.username : state.user.email
      //   } 🔥🔥`
      // );
    },
    [userRegister.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
      toast.error(action?.payload);
    },

    [userInit.pending]: (state, action) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [userInit.fulfilled]: (state, action) => {
      state.status = "SUCCESS";
      state.isLoading = false;
    },
    [userInit.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
      toast.error(action?.payload);
    },
  },
});

export { userLogin, userRegister };

export const { LOGIN, INITIALIZE, LOGOUT } = userSlice.actions;

export default userSlice.reducer;
