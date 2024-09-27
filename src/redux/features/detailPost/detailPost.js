import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_API_BACKEND } from "../../../config/common";
import { isValidToken } from "../../../utils/jwt";
import { detailPostSelector } from "../../selector/selector";

const namespace = "detail_post";

export const eachPostInit = createAsyncThunk(
  `${namespace}/init`,
  async (post_id, { dispatch, rejectWithValue, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(
          `${BASE_API_BACKEND}/api/posts/detail/${post_id}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
            signal: signal,
          }
        );
        const { data } = response;
        dispatch(
          INITIALIZE_DETAIL_POST({
            post: data.data,
          })
        );
      } else {
        return rejectWithValue("Something went wrong");
      }
    } catch (error) {
      dispatch(
        INITIALIZE_DETAIL_POST({
          post: null,
        })
      );
    }
  }
);

const initialState = {
  post: {},
  isLoading: false,
  status: null,
};

export const EACH_POST_FUNCTION = () => {
  const dispatch = useDispatch();
  const { post, isLoading, status } = useSelector(detailPostSelector);

  const initializeDetailPost = useCallback(() => {
    const promise = dispatch(eachPostInit());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return {
    post,
    isLoading,
    status,
    initializeDetailPost,
  };
};

const eachPostSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_DETAIL_POST: (state, action) => {
      state.post = action.payload.post;
    },
  },
  extraReducers: {
    [eachPostInit.pending]: (state) => {
      state.isLoading = true;
      state.status = "PENDING";
    },
    [eachPostInit.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [eachPostInit.rejected]: (state) => {
      state.isLoading = false;
      state.status = "FAILED";
    },
  },
});

export const { INITIALIZE_DETAIL_POST } = eachPostSlice.actions;

export default eachPostSlice.reducer;
