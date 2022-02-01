import { useEffect, useState } from "react";
import useAuthentication from "../../customHooks/useAuthentication";
import MainInfo from "./MainInfo/MainInfo";
import ProfileHeaderPost from "./ProfileHeaderPost/ProfileHeaderPost";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileStory from "./ProfileStory/ProfileStory";
import Header from "../Header/Header";
function Profile() {
  const [currentTab, setCurrentTab] = useState("post");
  const { user } = useAuthentication();
  const { username, avatar } = user;
  useEffect(() => {
    // call api
    console.log({ currentTab })
  }, [currentTab]);

  const handleClickTab = (value) => {
    setCurrentTab(value);
  };
  return (
    <>
      <Header />
      <div className="profile-section bg-[#fafafa] pt-header_height">
        <div className="pt-header_height w-[100%] lg:w-full max-w-[975px] mx-auto my-0 p-0 ">
          {/* avatar */}
          <MainInfo username={username} avatar={avatar} />
          <ProfileStory />
          <ProfileHeaderPost
            currentTab={currentTab}
            onClickTab={handleClickTab}
          />
          <ProfilePost currentTab={currentTab}/>

          <div className="footer h-[100px] flex justify-center items-center">
            <div className="text-xs opacity-60  mt-10">
              <span>Tiếng Việt © 2021 Instagram from Meta</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
