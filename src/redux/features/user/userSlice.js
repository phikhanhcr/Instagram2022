import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setSession, isValidToken } from "../../../utils/jwt";
import { toast } from "react-toastify";
import { useCallback } from "react";

import { socket } from "../../../index";
import { BASE_API_BACKEND } from "../../../config/common";
import axios from "axios";
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
        const response = await axios.post(
          `${BASE_API_BACKEND}/api/get-user`,
          {},
          {
            headers: {
              "x-auth-token": window.localStorage.getItem("accessToken"),
            },
          }
        );
        const { data } = response;
        dispatch(
          INITIALIZE({
            isAuthenticated: true,
            user: JSON.parse(data.user),
          })
        );
        socket.auth = JSON.parse(data.user);
        socket.emit("user-init", JSON.parse(data.user));
        socket.connect();
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
    const response = await axios.post(`${BASE_API_BACKEND}/api/login`, {
      ...userInfo,
    });
    const data = response.data;
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data.message);
    }
    setSession(data.token, data.refreshToken);
    data.user = JSON.parse(data.user);
    dispatch(userInit());
    dispatch(LOGIN(data));
  }
);

const userRegister = createAsyncThunk(
  "user/register",
  async (userInfo, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_API_BACKEND}/api/register`,
        {
          ...userInfo,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = response;
      //  Nếu bị lỗi thì reject
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data.message);
      }
      setSession(data.token, data.refreshToken);
      data.user = JSON.parse(data.user);
      dispatch(userInit());
      dispatch(LOGIN(data));
    } catch (error) {
      return rejectWithValue("Something went wrong, please try another time");
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
    LOGIN: (state, action) => {
      state.user = action.payload.user;
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
      // userSocket.emit("sign-in", state.user._id);
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
