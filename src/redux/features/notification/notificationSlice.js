import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { isValidToken } from "../../../utils/jwt";
import { notificationSelector } from "../../selector/selector";

const initialState = {
  notifications: [],
  isLoadingNotify: false,
  statusNotify: null,
}
const namespace = "notification";


// NOTIFICATION-ASYNC THUNK-----------------------------------------------------------------

export const getNotificationAsyncThunk = createAsyncThunk(
  `${namespace}/getMyNotify`,
  async (_, { dispatch, rejectWithValue, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && await isValidToken(accessToken)) {
        const response = await fetch("http://localhost:3001/api/notification", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'x-auth-token': window.localStorage.getItem("accessToken")
          },
          signal: signal
        });
        const data = await response.json();
        if (data) {
          dispatch(INITIALIZE_NOTIFICATION(data))
        } else {
          return rejectWithValue("Something went wrong")
        }
      } else {
        return rejectWithValue("Session expired, plz login to go go go");
      }
    } catch (error) {
      return rejectWithValue("Something went wrong")
    }
  }
)

// NOTIFICATION-SELECTOR-----------------------------------------------------------------

export const NotifyFunction = () => {
  // const dispatch = useDispatch();

  const { notifications, isLoadingNotify, statusNotify, } = useSelector(notificationSelector);
  return {
    notifications, isLoadingNotify, statusNotify,
  }
}

// NOTIFICATION-SLICE-----------------------------------------------------------------

const notificationSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_NOTIFICATION: (state, action) => {
      state.notifications = action.payload
    },
    LOGOUT_SET_NOTIFY: (state, action) => {
      state.notifications = [];
    },
    ADD_NOTIFY_REALTIME: (state, action) => {
      state.notifications.push(action.payload);
    }
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
  }
})


export const { INITIALIZE_NOTIFICATION, LOGOUT_SET_NOTIFY, ADD_NOTIFY_REALTIME } = notificationSlice.actions;

export default notificationSlice.reducer;
