import { memo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from '../../../Commom/LikeButton/LikeButton'

function MobileDiscover({ data }) {
  const urls = data.images;
  const [currentIndex, setCurrentIndex] = useState(0);
  function getNewSlideIndex(step) {
    let newSlideIndex = currentIndex + step;
    if (newSlideIndex >= urls.length) newSlideIndex = urls.length - 1;
    else if (newSlideIndex < 0) newSlideIndex = 0;
    setCurrentIndex(newSlideIndex);
  }
  const [likeCount, setLikeCount] = useState(data.like_count);

  return (
    <>
      <div className="block md:hidden w-[300px] max-h-screen overflow-hidden overflow-y-scroll h-auto bg-[#fff] rounded-lg">
        {/* header */}
        <div className="header flex p-4">
          <div
            className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mr-[14px] "
            style={{
              backgroundImage: `url(${data.userId.avatar})`,
            }}
          ></div>
          <div className="flex-1">
            <a href="/" className="text-sm font-semibold hover:underline">
              {data.userId.username}
            </a>
            <span> • </span>
            <span className="font-semibold text-[#0095f6] text-sm">
              Theo dõi
            </span>
          </div>
          <div>
            <svg
              aria-label="Tùy chọn khác"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={24}
              role="img"
              viewBox="0 0 24 24"
              width={24}
            >
              <circle cx={12} cy={12} r="1.5" />
              <circle cx="6.5" cy={12} r="1.5" />
              <circle cx="17.5" cy={12} r="1.5" />
            </svg>
          </div>
        </div>
        {/* images */}
        <div className="h-full relative overflow-hidden max-w-[1000px]">
          {urls.map((ele, index) => (
            <div
              className={
                index === currentIndex
                  ? "h-full relative block"
                  : "h-full relative hidden"
              }
              key={index}
            >
              <div className="top-1 left-2 opacity-[0.7] absolute text-white">
                {index + 1} / {urls.length}
              </div>
              <img
                src={ele}
                className="post-section__image h-full w-auto"
                alt=""
              />
            </div>
          ))}
          {urls.length > 1 && (
            <>
              <p
                onClick={() => getNewSlideIndex(-1)}
                className="text-black cursor-pointer absolute top-[50%] left-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]"
              >
                ❮
              </p>
              <p
                onClick={() => getNewSlideIndex(1)}
                className="text-black cursor-pointer absolute top-[50%] right-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]"
              >
                ❯
              </p>
            </>
          )}
        </div>
        {/* icon like */}
        <div className="flex justify-between px-4 pt-1">
          <div className="flex">
            
            <LikeButton post={data} setLikeCount={setLikeCount}/>

            {/* Link to comment section */}
            <Link to={`/post/comment/${data._id}`}>
              <div className="p-2 cursor-pointer">
                <svg
                  aria-label="Bình luận"
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
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </Link>

            <div className="p-2 cursor-pointer">
              <svg
                aria-label="Chia sẻ bài viết"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height={24}
                role="img"
                viewBox="0 0 48 48"
                width={24}
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </div>
          </div>
          <div className="py-2 pl-1 cursor-pointer">
            <svg
              aria-label="Lưu"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={24}
              role="img"
              viewBox="0 0 48 48"
              width={24}
            >
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
            </svg>
          </div>
        </div>
        {/* like views */}
        <div className="px-4 py-1">
          <a href="/" className="font-semibold text-sm block">
            {likeCount} lượt thích
          </a>
          <span className="text-xs opacity-60">3 ngày trước</span>
        </div>
        {/* add comment */}
        <div className="input flex items-center flex-1 px-4 py-2 text-sm border-t border-solid border-[#e9e9e9]">
          <div>
            <svg
              aria-label="Biểu tượng cảm xúc"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={24}
              role="img"
              viewBox="0 0 48 48"
              width={24}
            >
              <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
              <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
            </svg>
          </div>
          <div className="flex-1 w-full">
            <input
              type="text"
              className="w-full outline-none border-none pl-3"
              placeholder="Thêm bình luận..."
            />
          </div>
          <div>
            <button className="text-[#0095f6] ">Đăng</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(MobileDiscover);
