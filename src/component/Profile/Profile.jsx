import { useEffect, useState } from "react";
import MainInfo from "./MainInfo/MainInfo";
import ProfileHeaderPost from "./ProfileHeaderPost/ProfileHeaderPost";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileStory from "./ProfileStory/ProfileStory";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { BASE_API_BACKEND } from "../../config/common";
import { AxiosHelper } from "../../utils/http";
import useAuthentication from "../../customHooks/useAuthentication";
function Profile() {
  const [currentTab, setCurrentTab] = useState("post");
  const { username: name } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useAuthentication()

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_API_BACKEND}/api/users/user-info?username=${name}`;
      const data = await AxiosHelper.get(url);
      if (data) {
        setUserProfile(data);
        if(data.id === user.id) {
          setIsOwner(true)
        }
      }
    };
    fetchData();
  }, [name]);

  const handleClickTab = (value) => {
    setCurrentTab(value);
  };
  return (
    <>
      <Header />
      <div className="profile-section bg-[#fafafa] pt-header_height">
        <div className="pt-header_height w-[100%] lg:w-full max-w-[975px] mx-auto my-0 p-0 ">
          <MainInfo user={userProfile} isOwner={isOwner}/>
          <ProfileStory />
          <ProfileHeaderPost
            currentTab={currentTab}
            onClickTab={handleClickTab}
          />
          <ProfilePost currentTab={currentTab} />

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
