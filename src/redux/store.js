import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/postSlice";
import userReducer from "./features/user/userSlice";
import detailPostReducer from "./features/detailPost/detailPost";
import commentReducer from './features/comment/commentSlice'
import commentRepliedReducer from './features/comment/commentRepliedSlice';

const rootReducer = {
  user: userReducer,
  post: postReducer,
  detailPost: detailPostReducer,
  comment: commentReducer,
  comment_replied: commentRepliedReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store;