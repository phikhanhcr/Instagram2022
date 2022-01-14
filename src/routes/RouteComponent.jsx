import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../component/PageNotFount/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import CheckAuthLogin from "./RequireAuth";

const ViewCommentMobile = React.lazy(() =>
  import("../component/DetailPost/Version/Mobile/ViewComment/ViewComment")
);
const ForgotPassword = React.lazy(() =>
  import("../component/ForgotPassword/ForgotPassword")
);
const DetailPost = React.lazy(() =>
  import("../component/DetailPost/DetailPost")
);
const StoryPage = React.lazy(() => import("../component/StoryPage/StoryPage"));
const Discover = React.lazy(() => import("../component/Discover/Discover"));
const Profile = React.lazy(() => import("../component/Profile/Profile"));
const Setting = React.lazy(() => import("../component/Setting/Setting"));
const Direct = React.lazy(() => import("../component/Direct/Direct"));
const SignIn = React.lazy(() => import("../component/SignIn/SignIn"));
const Login = React.lazy(() => import("../component/Login/Login"));
const Home = React.lazy(() => import("../component/Home/Home"));

function RouteComponent() {
  return (
    <>
      <>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/direct/inbox" element={<Direct />}>
              <Route path=":userId" element={<Direct />} />
            </Route>
            <Route path="/explore" element={<Discover />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/post/view/:idPost" exact element={<DetailPost />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/settings" element={<Setting />} />
            <Route
              path="/post/comment/:idPost"
              element={<ViewCommentMobile />}
            />
          </Route>
        </Routes>
      </>
      <Routes>
        {/* <Route element={<CheckAuthLogin />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        {/* </Route> */}
      </Routes>
      {/* <Routes>
        <Route path="*" element={<PageNotFound>Alo ALo</PageNotFound>}></Route>
      </Routes> */}
    </>
  );
}

export default RouteComponent;
