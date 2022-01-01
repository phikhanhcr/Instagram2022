import { useEffect } from 'react';
import Home from './component/Home/Home';
import Direct from './component/Direct/Direct';
import StoryPage from './component/StoryPage/StoryPage';
import Login from './component/Login/Login';
import SignIn from './component/SignIn/SignIn';
import Profile from './component/Profile/Profile';
import Discover from './component/Discover/Discover';
import Setting from './component/Setting/Setting';
import ForgotPassword from './component/ForgotPassword/ForgotPassword';
import DetailPost from './component/DetailPost/DetailPost';
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header';
import ViewComment from './component/DetailPost/Version/Mobile/ViewComment/ViewComment';
function App() {
  useEffect(() => {
    document.title = "Instagram"
  }, [])
  const login = true;
  if (!login) {

  }
  return (
    <div className="App">
      {
        login ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/direct/inbox" element={<Direct />}>
                <Route path=":userId" element={<Direct />} />
              </Route>
              <Route path="/explore" element={<Discover />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/post/:idPost" exact element={<DetailPost />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/post/comment" element={<ViewComment />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignIn />} />
          </Routes>
        )
      }
    </div>
  );
}

export default App;
