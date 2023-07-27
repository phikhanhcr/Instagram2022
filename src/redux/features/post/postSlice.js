import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSelector } from "../../selector/selector";
import { toast } from "react-toastify";
import { isValidToken } from "../../../utils/jwt";
import { BASE_API_BACKEND } from "../../../config/common";
import axios from "axios";
const initialState = {
  post: [],
  isLoading: false,
  status: null,
  checkUploadSuccess: false,
  postByUserID: [],
  discoverPost: [],
};
const namespace = "post";

// CREATE-POST-ASYNC THUNK-----------------------------------------------------------------

export const createPostAsync = createAsyncThunk(
  `${namespace}/create`,
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.post(
          `${BASE_API_BACKEND}/api/post/create`,
          {
            ...body,
          },
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
          dispatch(CREATE_POST(data));
        } else {
          return rejectWithValue("Can't upload file, try again with other");
        }
      } else {
        return rejectWithValue("Token expired");
      }
    } catch (error) {
      return rejectWithValue("Can't upload file, try again with other");
    }
  }
);

export const getPostByUserId = createAsyncThunk(
  `${namespace}/get_post_by_user_id`,
  async (userId, { dispatch, rejectWithValue, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.post(
          `${BASE_API_BACKEND}/api/posts/get-by-type`,
          {
            user_id: userId,
          },
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
        dispatch(GET_POST_BY_USER_ID(data));
      } else {
        dispatch(GET_POST_BY_USER_ID([]));
      }
    } catch (error) {
      dispatch(GET_POST_BY_USER_ID([]));
    }
  }
);

// POST-ASYNC THUNK-----------------------------------------------------------------
export const postInit = createAsyncThunk(
  `${namespace}/init`,
  async (_, { dispatch, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(
          `${BASE_API_BACKEND}/api/posts/feeds`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          }
        );
        const { data } = response;

        dispatch(
          INITIALIZE_POST({
            post: data.data,
          })
        );
      } else {
        dispatch(
          INITIALIZE_POST({
            post: [],
          })
        );
      }
    } catch (error) {
      dispatch(
        INITIALIZE_POST({
          post: [],
        })
      );
    }
  }
);

export const postDiscover = createAsyncThunk(
  `${namespace}/discover`,
  async (_, { dispatch, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const config = {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`,
          },

          signal: signal,
        };
        const response = await axios.get(
          `${BASE_API_BACKEND}/api/posts/feeds`,
          config
        );
        const { data } = response;
        dispatch(GET_DISCOVER_POST(data));
      } else {
        dispatch(GET_DISCOVER_POST([]));
      }
    } catch (error) {
      dispatch(GET_DISCOVER_POST([]));
    }
  }
);

// POST-FUNCTIONS-----------------------------------------------------------------

export const PostFunction = () => {
  const dispatch = useDispatch();
  const {
    post,
    isLoading,
    status,
    checkUploadSuccess,
    postByUserID,
    discoverPost,
  } = useSelector(postSelector);

  const initializeNewFeedPost = useCallback(() => {
    dispatch(postInit());
  }, [dispatch]);

  return {
    post,
    status,
    isLoading,
    discoverPost,
    postByUserID,
    checkUploadSuccess,
    initializeNewFeedPost,
  };
};

// POST-SLICE-----------------------------------------------------------------

const postSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_POST: (state, action) => {
      state.post = action.payload.post;
    },
    CREATE_POST: (state, action) => {
      state.post.unshift(action.payload);
    },
    GET_POST_BY_USER_ID: (state, action) => {
      state.postByUserID = action.payload;
    },
    GET_DISCOVER_POST: (state, action) => {
      state.discoverPost = action.payload;
    },
    LOGOUT_SET_POST: (state) => {
      state.post = [];
      state.isLoading = false;
      state.status = null;
      state.checkUploadSuccess = false;
      state.postByUserID = [];
      state.discoverPost = [];
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
    [getPostByUserId.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [getPostByUserId.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [getPostByUserId.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
    },
    [postDiscover.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [postDiscover.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [postDiscover.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
    },
  },
});

export const {
  GET_POST_BY_USER_ID,
  INITIALIZE_POST,
  CREATE_POST,
  GET_DISCOVER_POST,
  LOGOUT_SET_POST,
} = postSlice.actions;
export default postSlice.reducer;
