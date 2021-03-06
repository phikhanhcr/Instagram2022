import "./ProfileHeaderPost.css";
function ProfileHeaderPost({ onClickTab, currentTab }) {
  return (
    <div>
      <div className="h-[53px] w-full border-t border-solid border-[#8f8f8f] flex justify-around md:justify-center items-center">
        <div
          onClick={() => onClickTab("posts")}
          className={
            currentTab === "posts"
              ? "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70 tab-profile__active"
              : "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70"
          }
        >
          <span className="flex items-center h-full">
            <svg
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={12}
              role="img"
              viewBox="0 0 48 48"
              width={12}
            >
              <path
                clipRule="evenodd"
                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden md:block ml-2 uppercase ">Bài viết</span>
          </span>
        </div>
        <div
          onClick={() => onClickTab("reels")}
          className={
            currentTab === "reels"
              ? "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70 tab-profile__active"
              : "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70"
          }
        >
          <span className="flex items-center h-full">
            <svg
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={12}
              role="img"
              viewBox="0 0 48 48"
              width={12}
            >
              <path d="M31.5 28.2l-11.2-6.5c-.5-.3-1-.3-1.5 0-.5.2-.8.7-.8 1.3v13c0 .5.3 1 .8 1.3.2.1.5.2.7.2.3 0 .5-.1.8-.2l11.2-6.5c.5-.3.7-.8.7-1.3s-.3-1-.7-1.3zM43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zM31.8 3c6.3 0 8.4 1.6 10 3.2 1.2 1.2 2.3 2.7 2.9 5.8h-9.3l-5.1-9h1.5zM16.2 3h10.5l5.1 9h-12l-5.1-9h1.5zm-10 3.2C7.3 5.1 8.7 4 11.5 3.4l4.9 8.6H3.3C3.9 8.9 5 7.4 6.2 6.2zM45 31.8c0 6.3-1.6 8.4-3.2 10-1.6 1.6-3.8 3.2-10 3.2H16.2c-6.3 0-8.4-1.6-10-3.2C4.6 40.2 3 38 3 31.8V15h42v16.8z"></path>
            </svg>
            <span className="hidden md:block ml-2 uppercase ">Reels</span>
          </span>
        </div>
        <div
          onClick={() => onClickTab("video")}
          className={
            currentTab === "video"
              ? "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70 tab-profile__active"
              : "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70"
          }
        >
          <span className="flex items-center h-full">
            <svg
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={12}
              role="img"
              viewBox="0 0 24 24"
              width={12}
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path>
            </svg>
            <span className="hidden md:block ml-2 uppercase ">Video</span>
          </span>
        </div>
        <div
          onClick={() => onClickTab("saved")}
          className={
            currentTab === "saved"
              ? "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70 tab-profile__active"
              : "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70"
          }
        >
          <span className="flex items-center h-full">
            <svg
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={12}
              role="img"
              viewBox="0 0 48 48"
              width={12}
            >
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
            </svg>
            <span className="hidden md:block ml-2 uppercase ">Đã lưu</span>
          </span>
        </div>
        <div
          onClick={() => onClickTab("tagged")}
          className={
            currentTab === "tagged"
              ? "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70 tab-profile__active"
              : "w-[20%] flex justify-center md:block md:w-auto md:mr-[60px] cursor-pointer h-full text-sm tab-profile opacity-70"
          }
        >
          <span className="flex items-center h-full">
            <svg
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={12}
              role="img"
              viewBox="0 0 48 48"
              width={12}
            >
              <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
            </svg>
            <span className="hidden md:block ml-2 uppercase ">
              Được gắn thẻ
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeaderPost;
