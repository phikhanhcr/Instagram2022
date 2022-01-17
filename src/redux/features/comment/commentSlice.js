import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { commentSelector } from "../../selector/selector";

const initialState = {
  comment: [],
  isLoading: false,
  status: null
}


const namespace = "comment_by_id_post";

export const commentAsyncIdPost = createAsyncThunk(
  `${namespace}/init`,
  async (idPost, { dispatch, signal }) => {
    console.log({ idPost })
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
      console.log({ data })
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

// COMMENT_FUNCTION-----------------------------------------------------------------

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
      console.log(action)
      state.comment = action.payload.comment;
    }
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
  }
})

export const {
  INITIALIZE_COMMENT
} = commentSlice.actions;

export default commentSlice.reducer;