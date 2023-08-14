import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_API_BACKEND } from "../../../config/common";
import { isValidToken } from "../../../utils/jwt";
import { commentSelector } from "../../selector/selector";

const initialState = {
  comment: [],
  isLoading: false,
  status: null,
  idLoadingCreate: false,
};

const namespace = "comment_by_id_post";

export const createCommentAsync = createAsyncThunk(
  `${namespace}/create`,
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.post(
          `${BASE_API_BACKEND}/api/comments/create`,
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
          if (body.comment_root_id || body.reply_to) {
            data.comment_root_id = body.comment_root_id;
            dispatch(CREATE_COMMENT_REPLIED(data));
          } else {
            dispatch(CREATE_COMMENT(data));
          }
        } else {
          return rejectWithValue("Errors");
        }
      } else {
        return rejectWithValue("Something went wrong");
      }
    } catch (error) {
      return rejectWithValue("Errors");
    }
  }
);

export const commentAsyncIdPost = createAsyncThunk(
  `${namespace}/init`,
  async (idPost, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.post(
          `${BASE_API_BACKEND}/api/comments/get-comments-by-post`,
          {
            post_id: idPost,
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
        console.log({ data });
        dispatch(
          INITIALIZE_COMMENT({
            comment: data.data,
          })
        );
      } else {
        return rejectWithValue("Something went wrong");
      }
    } catch (error) {
      dispatch(
        INITIALIZE_COMMENT({
          comment: null,
        })
      );
    }
  }
);

export const CommentFunction = () => {
  const { comment, isLoading, status } = useSelector(commentSelector);
  return {
    comment,
    isLoading,
    status,
  };
};

// COMMENT_SLICE-----------------------------------------------------------------
const commentSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_COMMENT: (state, action) => {
      state.comment = action.payload.comment;
    },
    CREATE_COMMENT: (state, action) => {
      state.comment.push(action.payload);
    },
    CREATE_COMMENT_REPLIED: (state, action) => {
      state.comment.map((ele) => {
        if (ele.id === action.payload.comment_root_id) {
          return {
            ...ele,
            comment_replied_count: ele.comment_replied_count++,
            comment_replied: ele.comment_replied.push({
              comment_id: {
                id: action.payload.id,
                content: action.payload.content,
              },
              user_id: action.payload.user_commented_id,
              username: action.payload.username,
              avatar: action.payload.avatar,
              reply_to: {
                user_id: action.payload.reply_to.id,
                username: action.payload.reply_to.username,
              },
            }),
          };
        }
        return ele;
      });
    },
  },
  extraReducers: {
    [commentAsyncIdPost.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [commentAsyncIdPost.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [commentAsyncIdPost.rejected]: (state) => {
      state.status = "FAILED";
      state.isLoading = false;
    },
    [createCommentAsync.pending]: (state) => {
      state.status = "PENDING";
      state.isLoadingCreate = true;
    },
    [createCommentAsync.fulfilled]: (state) => {
      state.isLoadingCreate = false;
      state.status = "SUCCESS";
    },
    [createCommentAsync.rejected]: (state) => {
      state.status = "FAILED";
      state.isLoadingCreate = false;
    },
  },
});

export const { INITIALIZE_COMMENT, CREATE_COMMENT, CREATE_COMMENT_REPLIED } =
  commentSlice.actions;

export default commentSlice.reducer;
