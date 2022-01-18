import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailPostSelector } from "../../selector/selector";

const namespace = "detail_post";

export const eachPostInit = createAsyncThunk(
  `${namespace}/init`,
  async (post_id, { dispatch, rejectWithValue, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await fetch(`http://localhost:3001/api/post/one/${post_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: accessToken
        },
        signal : signal
      });
      const data = await response.json();
      dispatch(INITIALIZE_DETAIL_POST({
        post : data
      }))
    } catch (error) {
      dispatch(INITIALIZE_DETAIL_POST({
        post : null
      }))
    }
  }
)

const initialState = {
  post: {},
  isLoading: false,
  status: null
}

export const EACH_POST_FUNCTION = () => {
  const dispatch = useDispatch();
  const { post, isLoading, status } = useSelector(detailPostSelector);

  const initializeDetailPost = useCallback(() => {
    const promise = dispatch(eachPostInit());
    return () => {
      promise.abort();
    }
  }, [dispatch])

  return {
    post,
    isLoading,
    status,
    initializeDetailPost
  }
}

const eachPostSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_DETAIL_POST: (state, action) => {
      state.post = action.payload.post
    }
  },
  extraReducers: {
    [eachPostInit.pending]: (state) => {
      state.isLoading = true;
      state.status = "PENDING"
    },
    [eachPostInit.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS"
    },
    [eachPostInit.rejected]: (state) => {
      state.isLoading = false;
      state.status = "FAILED"
    },

  }
})

export const { INITIALIZE_DETAIL_POST } = eachPostSlice.actions;

export default eachPostSlice.reducer;