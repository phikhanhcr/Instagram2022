import { memo, useEffect, useState } from "react";
import FollowerOverlay from "../FollowerOverlay/FollowerOverlay";
import MainAvatar from "./MainAvatar";

function MainInfo({ username, avatar }) {
  const [checkModal, setCheckModal] = useState("");
  useEffect(() => {
  }, [checkModal])

  const handleClose = () => {
    setCheckModal("");
  }

  return (
    <div className="flex mb-4 md:mb-11">      
      <MainAvatar avatar={avatar}/>
      <div className="w-8/12">
        <div>
          <div className="flex flex-col items-start mb-5 md:flex-row md:items-center">
            <span className="text-[28px] leading-8 font-light mb-3 md:mb-1">
              {username}
            </span>
            <button className="md:ml-5 border mb-3 md:mb-1 border-solid border-[#b9b9b9] px-[9px] py-[5px] font-semibold rounded-md">
              Chỉnh sửa trang cá nhân
            </button>
            <div className="cursor-pointer md:ml-4 mb-1">
              <svg
                aria-label="Tùy chọn"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height={24}
                role="img"
                viewBox="0 0 48 48"
                width={24}
              >
                <path
                  clipRule="evenodd"
                  d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="ml-[-50%] md:ml-0 flex md:block flex-col-reverse">
            <div className="flex justify-around md:justify-start text-xs md:text-sm mb-4 border md:border-none border-solid border-[#ccc] py-3 md:py-0 pl-[30px] md:pl-0">
              <div className=" text-center md:mr-10">
                <span className="text-sm font-semibold block md:inline-block">
                  8
                </span>{" "}
                bài viết
              </div>
              <div
                className=" text-center md:mr-10 cursor-pointer"
                id="follower-btn"
                onClick={() => setCheckModal("follower")}
              >
                <span className="text-sm font-semibold block md:inline-block">
                  29
                </span>{" "}
                người theo dõi
              </div>
              <div
                 onClick={() => setCheckModal("following")} 
                className="text-center cursor-pointer">
                Đang theo dõi{" "}
                <span className=" text-sm block md:inline-block font-semibold">
                  43
                </span>{" "}
                người dùng
              </div>
            </div>
            <div className="text-sm mb-4 pl-[30px] md:pl-0">
              <span className="font-semibold block mb-1"> KC Katalbas</span>
              <span>Sciencey Singer Songwriter</span>
            </div>
          </div>
        </div>
      </div>
      {
        checkModal !== "" && <FollowerOverlay onCloseBtb={handleClose}/>
      }
     
    </div>
  );
}

export default memo(MainInfo);
