import useAuthentication from "../../../customHooks/useAuthentication";
import RightFooterHomepage from "./RightFooter/RightFooter";
import SuggestFollow from "./SuggestFollow/SuggestFollow";

function RightSection() {
  const { user } = useAuthentication();
  return (
    <div
      className="px-1 lg:w-4/12 hidden lg:block max-w-[293px] right-[465px] fixed"
      id="right-main"
    >
      <div className="flex items-center mt-[10px] mb-[18px] mx-0">
        <div className="header__wrapper-info_avatar h-[47px] w-[47px] rounded-full flex justify-center items-center has-story story-wrapper-section">
          <a href="/story.html" className="bg-white block p-[2px] rounded-full">
            <div
              className="info_avatar h-[39px] w-[39px] bg-center bg-no-repeat bg-cover rounded-full flex story-info_avatar"
              style={{
                backgroundImage:
                  `url(${user.avatar})`,
              }}
            ></div>
          </a>
        </div>
        <div className="  ml-[10px] flex-1 items-center">
          <a href="/">
            <p className="text-sm mt-[-3px] mb-[-4px] font-semibold">
              {user.username}{" "}
            </p>
            <p className="text-sm mb-[-4px]  opacity-50 mt-1">{user.email.split("@")[0]}</p>
          </a>
        </div>
        <div>
          <a
            href="/"
            className="text-[#0095f6] text-follow-switch text-xs my-[-2px] font-semibold"
          >
            Chuyển
          </a>
        </div>
      </div>
      <SuggestFollow />
      <RightFooterHomepage />
    </div>
  );
}

export default RightSection;
