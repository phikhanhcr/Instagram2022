import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isValidToken } from "../../../utils/jwt";
import { BASE_API_BACKEND } from "../../../config/common";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { relationSelector } from "../../selector/selector";
import { useCallback } from "react";
const initialState = {
  users: [],
};
const namespace = "relation";

export const suggestFollowing = createAsyncThunk(
  `${namespace}/init`,
  async (_, { dispatch, signal }) => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && (await isValidToken(accessToken))) {
        const response = await axios.get(
          `${BASE_API_BACKEND}/api/relations/suggest-following`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          }
        );
        const { data } = response;

        console.log({ x: data.data });
        dispatch(INITIALIZE_SUGGEST_FOLLOWING(data.data));
      } else {
        dispatch(INITIALIZE_SUGGEST_FOLLOWING([]));
      }
    } catch (error) {
      dispatch(INITIALIZE_SUGGEST_FOLLOWING([]));
    }
  }
);

// RELATION-FUNCTIONS-----------------------------------------------------------------

export const RelationFunction = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(relationSelector);
  const initializeSuggestFollowing = useCallback(() => {
    dispatch(suggestFollowing());
  }, [dispatch]);

  return {
    users,
    initializeSuggestFollowing,
  };
};

// RELATION-SLICE-----------------------------------------------------------------

const relationSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    INITIALIZE_SUGGEST_FOLLOWING: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [suggestFollowing.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [suggestFollowing.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "SUCCESS";
    },
    [suggestFollowing.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
    },
  },
});

export const { INITIALIZE_SUGGEST_FOLLOWING } = relationSlice.actions;
export default relationSlice.reducer;
