import { useState } from "react";
import { toast } from "react-toastify";
import useAuthentication from "../../../../customHooks/useAuthentication";
import { isValidToken } from "../../../../utils/jwt";
import ActionSection from "./ActionSection/ActionSection";
import AddComment from "./AddComment/AddComment";
import CaptionStatus from "./CaptionStatus/CaptionStatus";
import PostHeader from "./EachPostHeader/EachPostHeader";
import PostImages from "./PostImages/PostImage";

function EachPostHomePage({ post }) {
  const { user } = useAuthentication();
  const [checkLike, setCheckLike] = useState(() => {
    let listUser = post.like_list.map((ele) => ele._id);
    return listUser.includes(user._id);
  });

  const [checkShowModal, setCHeckShowModal] = useState(false);
  const [likeCount, setLikeCount] = useState(post.like_count);

  const handleCloseBtn = () => {
    setCHeckShowModal((pre) => !pre);
  };
  const handleDbClick = () => {
    setCheckLike(true);
  };

  const handleCLickHeart = async (type) => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken && (await isValidToken(accessToken))) {
      const optionFetch = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": window.localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ post_id: post._id }),
      };

      if (type === "like") {
        try {
          const response = await fetch(
            "http://localhost:3001/api/post/like",
            optionFetch
          );
          const data = await response.json();
          setCheckLike((pre) => !pre);
          setLikeCount((pre) => pre + 1);
          if (data.msg === "oke") {
            // socket.emit("handle-like", { target_user_id });
          }
        } catch (error) {
          toast.error("Too much request, please slowly");
        }
      } else {
        try {
          const response = await fetch(
            "http://localhost:3001/api/post/unlike",
            optionFetch
          );
          const data = await response.json();
          setCheckLike((pre) => !pre);
          setLikeCount((pre) => pre - 1);

          if (data.msg === "oke") {
            // socket io
            // socket.emit("handle-unlike", { target_user_id });
          }
        } catch (error) {
          toast.error("Too much request, please slowly");
        }
      }
    }
  };

  return (
    <li className="post_section-item mb-8">
      <div className="bg-[#fff] post-section w-full border border-solid border-[#ccc]">
        <div className="post-section__username-image">
          <PostHeader info={post.userId} idPost={post._id} />
          <PostImages onDbCLick={handleDbClick} images={post.images} />
        </div>

        <div className="post-section__action-comment py-[6px] px-4">
          <ActionSection
            checkLike={checkLike}
            handleCheckLike={handleCLickHeart}
            post={post}
            checkShowModal={checkShowModal}
            handleCloseBtn={handleCloseBtn}
          />
          {/* status  */}
          <CaptionStatus post={post} likeCount={likeCount} />

          {/* comment section */}
          {/* <CommentSection /> */}

          {/* post comment*/}
          <AddComment idPost={post._id} />
        </div>
      </div>
    </li>
  );
}

export default EachPostHomePage;
