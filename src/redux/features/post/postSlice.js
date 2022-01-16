import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSelector, userSelector } from "../../selector/selector";

const initialState = {
  post: [],
  isLoading: false,
  status: null
}
const namespace = "post";

// POST-ASYNC THUNK-----------------------------------------------------------------

const postInit = createAsyncThunk(
  `${namespace}/init`,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:3001/api/post/feeds", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: accessToken
        }
      });
      const data = await response.json();
      dispatch(INITIALIZE_POST({
        post: data
      }));
    } catch (error) {
      dispatch(INITIALIZE_POST({
        post: null
      }));
    }

    // get access token
    // get user 

  }
)

// POST-FUNCTIONS-----------------------------------------------------------------

export const PostFunction = () => {
  const dispatch = useDispatch();
  const { post, isLoading, status } = useSelector(postSelector);

  const initializeNewFeedPost = useCallback(() => {
    dispatch(postInit());
  }, [dispatch])

  return {
    post,
    isLoading,
    status,
    initializeNewFeedPost
  }
}

// POST-SLICE-----------------------------------------------------------------

const postSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_POST: (state, action) => {
      console.log({ action })
      state.post = action.payload.post
    }
  },
  extraReducers: {
    [postInit.pending]: (state) => {
      console.log({ state })
      state.status = "PENDING";
      state.isLoading = true;
    },
    [postInit.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [postInit.rejected]: (state) => {
      state.status = "FAILED";
      state.isLoading = false;
    },
  }
})

export const {
  INITIALIZE_POST
} = postSlice.actions;
export default postSlice.reducer;