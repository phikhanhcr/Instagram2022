import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/postSlice";
import userReducer from "./features/user/userSlice";
import detailPostReducer from "./features/detailPost/detailPost";
const rootReducer = {
  user: userReducer,
  post: postReducer,
  detailPost: detailPostReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store;