function ItemStoryPage({ info, active, onClickHandle, index }) {
  return (
    <div
      onClick={() => onClickHandle(index)}
      className={
        active
          ? "story-active overflow-hidden wrapper-story__item duration-500 flex items-center h-screen w-screen rounded-none md:h-[750px] md:w-[418px] absolute left-0 origin-left transition-all bg-gray-500  md:rounded-xl"
          : "wrapper-story__item duration-500 flex items-center h-screen w-screen rounded-none md:h-[750px] md:w-[418px] absolute left-0 origin-left transition-all bg-gray-500  md:rounded-xl"
      }
    >
      <img className="w-full" src={info.src} alt="img" />
      <div className="active__hidden hidden rounded-xl md:flex absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60 items-center justify-center">
        <div className="h-[165px] w-[165px] rounded-full flex justify-center items-center has-story">
          <a href="/" className="bg-white block p-0.5 rounded-full">
            <div
              className="h-[150px] w-[150px] bg-center bg-cover bg-no-repeat rounded-full flex transition-all   "
              style={{
                backgroundImage: `url(${info.avatar})`,
              }}
            ></div>
          </a>
        </div>
      </div>
      <div className="story-section__view__item--overlay absolute top-0 right-0 left-0 bottom-0 p-4">
        <div className="active-flex relative hidden justify-between z-[1] items-center text-white">
          <div className="overlay-header text-white flex justify-between w-full">
            <div className="w-full flex items-center">
              <div
                className="rounded-full w-8 h-8 bg-center bg-cover bg-no-repeat mr-1.5"
                style={{
                  backgroundImage: `url(${info.avatar})`,
                }}
              />
              <p className="font-semibold text-sm hover:underline cursor-pointer">
                omrtoir88
              </p>
              <span className="ml-3 text-sm opacity-50">6 giờ</span>
            </div>
            <div className="overlay-header flex items-center text-white">
              <div className="ml-3 cursor-pointer">
                <svg
                  aria-label="Phát"
                  className="_8-yf5"
                  color="#ffffff"
                  fill="#ffffff"
                  height={16}
                  role="img"
                  viewBox="0 0 48 48"
                  width={16}
                >
                  <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path>
                </svg>
              </div>
              <div className="ml-3 cursor-pointerr">
                <svg
                  aria-label="Video không có âm thanh."
                  className="_8-yf5"
                  color="#ffffff"
                  fill="#ffffff"
                  height={16}
                  role="img"
                  viewBox="0 0 48 48"
                  width={16}
                >
                  <path
                    clipRule="evenodd"
                    d="M42.9 24l4.6 4.6c.6.6.6 1.6 0 2.2l-1.4 1.4c-.6.6-1.6.6-2.2 0l-4.6-4.6-4.6 4.6c-.6.6-1.6.6-2.2 0l-1.4-1.4c-.6-.6-.6-1.6 0-2.2l4.6-4.6-4.6-4.6c-.6-.6-.6-1.6 0-2.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l4.6 4.6 4.6-4.6c.6-.6 1.6-.6 2.2 0l1.4 1.4c.6.6.6 1.6 0 2.2L42.9 24zM24.1 47.6L11.3 34.7H1.6C.7 34.7 0 34 0 33.2V14.8c0-.8.7-1.5 1.5-1.5h9.7L24.1.4c.9-.9 2.5-.3 2.5 1v45.1c0 1.3-1.6 2-2.5 1.1z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3 cursor-pointerr">
                <svg
                  aria-label="Menu"
                  className="_8-yf5"
                  color="#ffffff"
                  fill="#ffffff"
                  height={24}
                  role="img"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path
                    d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3 cursor-pointerr d-none show__mobile story-section__view--close-btn ">
                <svg
                  aria-label="Đóng"
                  className="_8-yf5 "
                  color="#ffffff"
                  fill="#ffffff"
                  height={24}
                  role="img"
                  viewBox="0 0 48 48"
                  width={24}
                >
                  <path
                    clipRule="evenodd"
                    d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <>
          {active ? (
            <div className="flex justify-between -mx-2  absolute top-[50%] right-4 left-4 bottom-[50]">
              <p
                onClick={() => onClickHandle(index - 1)}
                className="opacity-0 select-none hover:opacity-100 text-black cursor-pointer font-bold text-sm rounded-full flex items-center justify-center w-6 h-6 bg-white bg-opacity-80 pre-story"
                id="pre-story"
              >
                &lt;{" "}
              </p>
              <p
                onClick={() => onClickHandle(index + 1)}
                className="opacity-0 select-none hover:opacity-100 text-black cursor-pointer font-bold text-sm rounded-full flex items-center justify-center w-6 h-6 bg-white bg-opacity-80 next-story"
                id="next-story"
              >
                {" "}
                &gt;
              </p>
            </div>
          ) : (
            ""
          )}
        </>
        {/* footer */}
        <div className="active-flex hidden justify-between z-[1] items-center text-white absolute bottom-2 right-0 left-0">
          <div className="w-full flex items-center justify-around">
            <input
              type="text"
              className="placeholder-white story-send-message w-[298px] h-[44px] rounded-[20px] bg-transparent pl-3 text-white border border-solid border-[#fff] text-base outline-none"
              placeholder="Trả lời..."
            />
            <div>
              <svg
                aria-label="Chia sẻ trực tiếp"
                className="_8-yf5"
                color="#dbdbdb"
                fill="#dbdbdb"
                height={24}
                role="img"
                viewBox="0 0 48 48"
                width={24}
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemStoryPage;
