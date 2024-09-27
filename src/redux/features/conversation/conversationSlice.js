import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { isValidToken } from "../../../utils/jwt";
import { conversationSelector } from "../../selector/selector";
import { BASE_API_CHAT } from "../../../config/dist/common";

const initialState = {
  conversations: [],
  isLoading: false,
};

const namespace = "conversation";

export const getConversationsAsyncById = createAsyncThunk(
  `${namespace}/all_channels`,
  async (_, { dispatch, signal, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      // need to check if invalid token
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(`${BASE_API_CHAT}/chat/channels`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`,
          },
          params: {
            limit: 10,
          },
          signal: signal,
        });
        const data = response.data;
        if (data.data.length) {
          dispatch(GET_ALL_CHANNELS(data.data));
        }
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
    GET_ALL_CHANNELS: (state, action) => {
      state.conversations = action.payload;
      console.log({ state: state.conversations });
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

export const { GET_ALL_CHANNELS } = conversationSlice.actions;

export default conversationSlice.reducer;
