import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { commentRepliedSelector } from "../../selector/selector";

const initialState = {
  comment_replied: [],
  isLoading: false,
  status: null
}


const namespace = "comment_replied_by_root_comment";

export const commentRepliedAsyncIdCommentRoot = createAsyncThunk(
  `${namespace}/init`,
  async (idCommentRoot, { dispatch, signal }) => {
    console.log({ idCommentRoot })
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      const response = await fetch(`http://localhost:3001/api/comment/replied/${idCommentRoot}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: accessToken
        },
        signal: signal
      });
      const data = await response.json();
      console.log({ data })
      dispatch(INITIALIZE_COMMENT_REPLIED({
        comment_replied: data.newData
      }));
    } catch (error) {
      dispatch(INITIALIZE_COMMENT_REPLIED({
        comment_replied: null
      }));
    }
  }
)

// COMMENT_FUNCTION-----------------------------------------------------------------

export const CommentRepliedFunction = () => {
  const { comment_replied, isLoading, status } = useSelector(commentRepliedSelector);
  return {
    comment_replied,
    isLoading,
    status,
  }
}

// COMMENT_SLICE-----------------------------------------------------------------
const commentRepliedSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_COMMENT_REPLIED: (state, action) => {
      console.log(action)
      state.comment_replied = action.payload.comment_replied;
    }
  },
  extraReducers: {
    [commentRepliedAsyncIdCommentRoot.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [commentRepliedAsyncIdCommentRoot.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [commentRepliedAsyncIdCommentRoot.rejected]: (state) => {
      state.status = "FAILED";
      state.isLoading = false;
    },
  }
})

export const {
  INITIALIZE_COMMENT_REPLIED
} = commentRepliedSlice.actions;

export default commentRepliedSlice.reducer;