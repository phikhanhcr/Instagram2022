import { useState } from "react";
import { Link } from "react-router-dom";
import LikeButton from "../../../Commom/LikeButton/LikeButton";
import HeaderMobileDetail from "./Header/HeaderMobileDetail";
import ImagesPostMobile from "./ImagesPost/ImagesPostMobile";

function PostMobile({ onCLickClose, post }) {
  const [likeCount, setLikeCount] = useState(post.like_count);
  return (
    <>
      <div className="block md:hidden">
        <div className=" w-full max-h-screen overflow-hidden h-auto bg-[#fff] rounded-lg">
          <HeaderMobileDetail onCLickClose={onCLickClose} post={post} />
          <ImagesPostMobile images={post.images_url} />

          {/* icon like */}
          <div className="flex justify-between px-4 pt-1">
            <div className="flex">
              <LikeButton post={post} setLikeCount={setLikeCount}/>
              <Link to={`/post/comment/${post.id}`}>
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
            <span className="text-xs text-black">3 ngày trước</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostMobile;
