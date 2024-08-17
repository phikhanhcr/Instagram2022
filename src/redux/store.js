import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/postSlice";
import userReducer from "./features/user/userSlice";
import detailPostReducer from "./features/detailPost/detailPost";
import commentReducer from "./features/comment/commentSlice";
import notificationReducer from "./features/notification/notificationSlice";
import messageReducer from "./features/message/messageSlice";
import conversationReducer from "./features/conversation/conversationSlice";
import relationReducer from "./features/relation/relationSlice";
const rootReducer = {
  user: userReducer,
  post: postReducer,
  detailPost: detailPostReducer,
  comment: commentReducer,
  notification: notificationReducer,
  message: messageReducer,
  conversation: conversationReducer,
  relation: relationReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
