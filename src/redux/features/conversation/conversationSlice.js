import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { socket } from "../../..";
import { BASE_API_BACKEND } from "../../../config/common";
import { isValidToken } from "../../../utils/jwt";
import { conversationSelector } from "../../selector/selector";

const initialState = {
  conversations: [],
  isLoading: false,
};

const namespace = "conversation";

export const getConversationsAsyncById = createAsyncThunk(
  `${namespace}/by_id`,
  async (_, { dispatch, signal, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      // need to check if invalid token
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(
          `${BASE_API_BACKEND}/api/conversation/get`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": window.localStorage.getItem("accessToken"),
            },
            signal: signal,
          }
        );
        const data = response.data;
        // dispatch an action
        dispatch(GET_CONVERSATION_BY_ID(data));
      } else {
        return rejectWithValue("Token expired");
      }
    } catch (error) {
      return rejectWithValue("Something went wrong.......");
    }
  }
);

export const ConversationFunction = () => {
  const { conversations, isLoading, status } =
    useSelector(conversationSelector);
  return {
    conversations,
    isLoading,
    status,
  };
};

// conversation_SLICE-----------------------------------------------------------------
const conversationSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    GET_CONVERSATION_BY_ID: (state, action) => {
      state.conversations = action.payload;
    },
  },
  extraReducers: {
    [getConversationsAsyncById.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [getConversationsAsyncById.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [getConversationsAsyncById.rejected]: (state) => {
      state.status = "FAILED";
      state.isLoading = false;
    },
  },
});

export const { GET_CONVERSATION_BY_ID } = conversationSlice.actions;

export default conversationSlice.reducer;
