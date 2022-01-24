import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { commentSelector } from "../../selector/selector";

const initialState = {
  comment: [],
  isLoading: false,
  status: null,
  idLoadingCreate: false,
}


const namespace = "comment_by_id_post";

export const createCommentAsync = createAsyncThunk(
  `${namespace}/create`,
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:3001/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: accessToken
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data) {
        if (body.comment_root_id || body.reply_to) {
          data.comment_root_id = body.comment_root_id;
          dispatch(CREATE_COMMENT_REPLIED(data));
        } else {
          dispatch(CREATE_COMMENT(data));
        }
      } else {
        return rejectWithValue("Errors")
      }
    } catch (error) {
      return rejectWithValue("Errors")
    }
  }
)



export const commentAsyncIdPost = createAsyncThunk(
  `${namespace}/init`,
  async (idPost, { dispatch, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await fetch(`http://localhost:3001/api/comment/post/${idPost}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: accessToken
        },
        signal: signal
      });
      const data = await response.json();
      dispatch(INITIALIZE_COMMENT({
        comment: data.data
      }));
    } catch (error) {
      dispatch(INITIALIZE_COMMENT({
        comment: null
      }));
    }
  }
)

export const CommentFunction = () => {
  const { comment, isLoading, status } = useSelector(commentSelector);
  return {
    comment,
    isLoading,
    status,
  }
}

// COMMENT_SLICE-----------------------------------------------------------------
const commentSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_COMMENT: (state, action) => {
      state.comment = action.payload.comment;
    },
    CREATE_COMMENT: (state, action) => {
      state.comment.push(action.payload)
    },
    CREATE_COMMENT_REPLIED: (state, action) => {
      state.comment.map(ele => {
        if (ele._id === action.payload.comment_root_id) {
          return {
            ...ele,
            comment_replied_count: ele.comment_replied_count++,
            comment_replied: ele.comment_replied.push({
              comment_id: {
                _id: action.payload._id,
                content: action.payload.content
              },
              user_id: action.payload.user_commented_id,
              username: action.payload.username,
              avatar: action.payload.avatar,
              reply_to: {
                user_id: action.payload.reply_to._id,
                username: action.payload.reply_to.username,
              }
            })
          }
        }
        return ele;
      })

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
  }
})

export const {
  INITIALIZE_COMMENT,
  CREATE_COMMENT,
  CREATE_COMMENT_REPLIED
} = commentSlice.actions;

export default commentSlice.reducer;