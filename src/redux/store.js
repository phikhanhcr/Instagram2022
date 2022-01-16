import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/postSlice";
import userReducer from "./features/user/userSlice";

const rootReducer = { 
  user : userReducer,
  post : postReducer
}

const store =  configureStore({
  reducer : rootReducer
})

export default store;