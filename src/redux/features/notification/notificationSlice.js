import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BASE_API_BACKEND,
  BASE_API_NOTIFICATION,
} from "../../../config/common";
import { isValidToken } from "../../../utils/jwt";
import { notificationSelector } from "../../selector/selector";

const initialState = {
  notifications: [],
  isLoadingNotify: false,
  statusNotify: null,
  checkNewNotify: false,
};
const namespace = "notification";

// NOTIFICATION-ASYNC THUNK-----------------------------------------------------------------

export const getNotificationAsyncThunk = createAsyncThunk(
  `${namespace}/getMyNotify`,
  async (_, { dispatch, rejectWithValue, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      console.log({
        accessToken: accessToken && (await isValidToken(accessToken)),
      });
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(
          `${BASE_API_NOTIFICATION}/api/notifications`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          }
        );
        const { data } = response;
        if (data) {
          dispatch(INITIALIZE_NOTIFICATION(data.data));
        } else {
          return rejectWithValue("Something went wrong");
        }
      } else {
        return rejectWithValue("Session expired, plz login to go go go");
      }
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

export const markAllReadNotificationAsyncThunk = createAsyncThunk(
  `${namespace}/markAllRead`,
  async (_, { dispatch, rejectWithValue, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(
          `${BASE_API_NOTIFICATION}/api/notifications/read-all`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          }
        );
        const data = response.data;

        if (data) {
          dispatch(MARK_ALL_READ());
        } else {
          return rejectWithValue("Something went wrong");
        }
      } else {
        return rejectWithValue("Session expired, plz login to go go go");
      }
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

export const checkNewNotifyInitialized = createAsyncThunk(
  `${namespace}/checkNewNotify`,
  async (_, { dispatch, rejectWithValue, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(
          `${BASE_API_NOTIFICATION}/api/notifications/check-new`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          }
        );
        const data = response.data;
        if (data) {
          dispatch(CHECK_NEW_NOTIFY(data.data.is_new));
        } else {
          return rejectWithValue("Something went wrong");
        }
      } else {
        return rejectWithValue("Session expired, plz login to go go go");
      }
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

// NOTIFICATION-SELECTOR-----------------------------------------------------------------

export const NotifyFunction = () => {
  const dispatch = useDispatch();

  const initializeNotify = useCallback(() => {
    dispatch(checkNewNotifyInitialized());
  }, [dispatch]);

  const { checkNewNotify, statusNotify, isLoadingNotify, notifications } =
    useSelector(notificationSelector);
  return {
    notifications,
    isLoadingNotify,
    statusNotify,
    checkNewNotify,
    initializeNotify,
  };
};

// NOTIFICATION-SLICE-----------------------------------------------------------------

const notificationSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_NOTIFICATION: (state, action) => {
      state.notifications = action.payload;
    },
    LOGOUT_SET_NOTIFY: (state, action) => {
      state.notifications = [];
    },
    ADD_NOTIFY_REALTIME: (state, action) => {
      state.notifications.push(action.payload);
    },
    MARK_ALL_READ: (state) => {
      state.notifications.map((ele) => ele.seen === true);
      state.checkNewNotify = false;
    },
    CHECK_NEW_NOTIFY: (state, action) => {
      state.checkNewNotify = action.payload;
    },
  },
  extraReducers: {
    [getNotificationAsyncThunk.pending]: (state) => {
      state.statusNotify = "PENDING";
      state.isLoadingNotify = true;
    },
    [getNotificationAsyncThunk.fulfilled]: (state) => {
      state.isLoadingNotify = false;
      state.statusNotify = "SUCCESS";
    },
    [getNotificationAsyncThunk.rejected]: (state) => {
      state.statusNotify = "FAILED";
      state.isLoadingNotify = false;
    },
    [checkNewNotifyInitialized.pending]: (state) => {
      state.statusNotify = "PENDING";
      state.isLoadingNotify = true;
    },
    [checkNewNotifyInitialized.fulfilled]: (state) => {
      state.isLoadingNotify = false;
      state.statusNotify = "SUCCESS";
    },
    [checkNewNotifyInitialized.rejected]: (state) => {
      state.statusNotify = "FAILED";
      state.isLoadingNotify = false;
    },
  },
});

export const {
  INITIALIZE_NOTIFICATION,
  LOGOUT_SET_NOTIFY,
  ADD_NOTIFY_REALTIME,
  MARK_ALL_READ,
  CHECK_NEW_NOTIFY,
} = notificationSlice.actions;

export default notificationSlice.reducer;
