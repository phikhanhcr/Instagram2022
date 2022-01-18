import { useState } from "react";
import ActionSection from "./ActionSection/ActionSection";
import AddComment from "./AddComment/AddComment";
import CaptionStatus from "./CaptionStatus/CaptionStatus";
import CommentSection from "./CommentSection/CommentSection";
import PostHeader from "./EachPostHeader/EachPostHeader";
import PostImages from "./PostImages/PostImage";

function EachPostHomePage({ post }) {
  const [checkLike, setCheckLike] = useState(false);
  const [checkShowModal, setCHeckShowModal] = useState(false);

  const handleCloseBtn = () => {
    setCHeckShowModal((pre) => !pre);
  };
  const handleDbClick = () => {
    setCheckLike(true);
  };

  const handleCLickHeart = () => {
    setCheckLike((pre) => !pre);
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
          <CaptionStatus post={post} />

          {/* comment section */}
          {/* <CommentSection /> */}

          {/* post comment*/}
          <AddComment />
        </div>
      </div>
    </li>
  );
}

export default EachPostHomePage;
