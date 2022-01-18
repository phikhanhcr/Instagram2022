import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSelector } from "../../selector/selector";
import { toast } from "react-toastify";
const initialState = {
  post: [],
  isLoading: false,
  status: null,
  checkUploadSuccess: false
}
const namespace = "post";


// CREATE-POST-ASYNC THUNK-----------------------------------------------------------------

export const createPostAsync = createAsyncThunk(
  `${namespace}/create`,
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:3001/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: accessToken
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data) {
        dispatch(CREATE_POST(data))
      } else {
        return rejectWithValue("Can't upload file, try again with other")
      }
    } catch (error) {
      return rejectWithValue("Can't upload file, try again with other")
    }
  }
)



// POST-ASYNC THUNK-----------------------------------------------------------------
export const postInit = createAsyncThunk(
  `${namespace}/init`,
  async (_, { dispatch, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:3001/api/post/feeds", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: accessToken
        },
        signal: signal
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
  }
)

// POST-FUNCTIONS-----------------------------------------------------------------

export const PostFunction = () => {
  const dispatch = useDispatch();
  const { post, isLoading, status, checkUploadSuccess } = useSelector(postSelector);

  const initializeNewFeedPost = useCallback(() => {
    dispatch(postInit());
  }, [dispatch])

  return {
    post,
    status,
    isLoading,
    checkUploadSuccess,
    initializeNewFeedPost
  }
}

// POST-SLICE-----------------------------------------------------------------

const postSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_POST: (state, action) => {
      state.post = action.payload.post
    },
    CREATE_POST: (state, action) => {
      state.post.unshift(action.payload);
    },
  },
  extraReducers: {
    [postInit.pending]: (state) => {
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
    [createPostAsync.pending]: (state) => {
      state.status = "PENDING";
      state.checkUploadSuccess = false;
      state.isLoading = true;
    },
    [createPostAsync.fulfilled]: (state) => {
      state.checkUploadSuccess = true;
      state.isLoading = false;
      state.status = "SUCCESS";
      toast.success(`Upload post successfully`);
    },
    [createPostAsync.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
      state.checkUploadSuccess = false;
      toast.error(action?.payload);
    },
  }
})

export const {
  INITIALIZE_POST,
  CREATE_POST
} = postSlice.actions;
export default postSlice.reducer;