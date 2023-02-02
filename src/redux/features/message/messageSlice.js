import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { socket } from "../../..";
import { isValidToken } from "../../../utils/jwt";
import { messageSelector } from "../../selector/selector";

const initialState = {
  messages: [],
  isLoading: false,
  status: null
}

const namespace = "message";

export const getMessagesAsyncById = createAsyncThunk(
  `${namespace}/by_id`,
  async (conversationId, { dispatch, signal, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      // need to check if invalid token
      if (accessToken && await isValidToken(accessToken)) {
        const response = await fetch(`http://localhost:3001/api/get-messages/${conversationId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'x-auth-token': window.localStorage.getItem("accessToken")
          },
          signal: signal
        });
        const data = await response.json();
        // dispatch an action
        dispatch(GET_MESSAGE_BY_ID(data))

      } else {
        return rejectWithValue("Token expired")
      }
    } catch (error) {
      return rejectWithValue("Something went wrong.......")
    }
  }
)

export const loadMoreMessages = createAsyncThunk(
  `${namespace}/load-more-message`,
  async (data, { dispatch, signal, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      // need to check if invalid token
      if (accessToken && await isValidToken(accessToken)) {
        const response = await fetch(`http://localhost:3001/api/get-more-messages/${data.conversationId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'x-auth-token': window.localStorage.getItem("accessToken")
          },
          body : data.lastMessageDate,
          signal: signal
        });
        const data = await response.json();
        // dispatch an action
     

      } else {
        return rejectWithValue("Token expired")
      }
    } catch (error) {
      return rejectWithValue("Something went wrong.......")
    }
  }
)


export const MessageFunction = () => {
  const { messages, isLoading, status } = useSelector(messageSelector);
  return {
    messages,
    isLoading,
    status,
  }
}

// message_SLICE-----------------------------------------------------------------
const messageSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    GET_MESSAGE_BY_ID: (state, action) => {
      state.messages = action.payload;
    }
  },
  extraReducers: {
    [getMessagesAsyncById.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [getMessagesAsyncById.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [getMessagesAsyncById.rejected]: (state) => {
      state.status = "FAILED";
      state.isLoading = false;
    }
  }
})

export const {
  GET_MESSAGE_BY_ID
} = messageSlice.actions;

export default messageSlice.reducer;