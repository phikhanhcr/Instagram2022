import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

const ViewCommentMobile = React.lazy(() => import("../component/DetailPost/Version/Mobile/ViewComment/ViewComment"))
const ForgotPassword = React.lazy(() => import("../component/ForgotPassword/ForgotPassword"))
const DetailPost = React.lazy(() => import("../component/DetailPost/DetailPost"))
const StoryPage = React.lazy(() => import("../component/StoryPage/StoryPage"))
const Discover = React.lazy(() => import("../component/Discover/Discover"))
const Profile = React.lazy(() => import("../component/Profile/Profile"))
const Setting = React.lazy(() => import("../component/Setting/Setting"))
const Direct = React.lazy(() => import("../component/Direct/Direct"))
const Home = React.lazy(() => import("../component/Home/Home"))


const HomeRoute = (props) => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/direct/inbox" element={<Direct />}>
        <Route path=":userId" element={<Direct />} />
      </Route>
      <Route path="/explore" element={<Discover />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/post/:idPost" exact element={<DetailPost />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/post/comment" element={<ViewCommentMobile />} />
    </>
  );
}

export default HomeRoute;