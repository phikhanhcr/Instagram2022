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
  const [checkShowModal, setCHeckShowModal] = useState(false);
  const [likeCount, setLikeCount] = useState(post.like_count);

  const handleCloseBtn = () => {
    setCHeckShowModal((pre) => !pre);
  };

  return (
    <li className="post_section-item mb-8">
      <div className="bg-[#fff] post-section w-full border border-solid border-[#ccc]">
        <div className="post-section__username-image">
          <PostHeader info={post.userId} idPost={post._id} />
          <PostImages images={post.images} />
        </div>

        <div className="post-section__action-comment py-[6px] px-4">
          <ActionSection
            setLikeCount={setLikeCount}
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
