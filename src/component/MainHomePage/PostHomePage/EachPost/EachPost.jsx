import { useState } from "react";
import { toast } from "react-toastify";
import useAuthentication from "../../../../customHooks/useAuthentication";
import { isValidToken } from "../../../../utils/jwt";
import ActionSection from "./ActionSection/ActionSection";
import AddComment from "./AddComment/AddComment";
import CaptionStatus from "./CaptionStatus/CaptionStatus";
import PostHeader from "./EachPostHeader/EachPostHeader";
import PostImages from "./PostImages/PostImage";
import CommentSection from "./CommentSection/CommentSection";

function EachPostHomePage({ post }) {
  console.log("re-render", post.id)
  const [checkShowModal, setCHeckShowModal] = useState(false);
  const [likeCount, setLikeCount] = useState(post.like_count);

  const handleCloseBtn = () => {
    setCHeckShowModal((pre) => !pre);
  };

  return (
    <li className="post_section-item mb-8">
      <div className="bg-[#fff] post-section w-full border border-solid border-[#ccc]">
        <div className="post-section__username-image">
          <PostHeader info={{ username: post.username, avatar: post.user_avatar }} idPost={post.id} />
          <PostImages images={post.images_url} />
        </div>

        <div className="post-section__action-comment py-[6px] px-4">
          <ActionSection
            setLikeCount={setLikeCount}
            post={post}
            checkShowModal={checkShowModal}
            handleCloseBtn={handleCloseBtn}
          />
          {/* status  */}
          <CaptionStatus post={post} />

          {/* comment section */}
          <CommentSection post={post}/>

          {/* post comment*/}
          <AddComment idPost={post.id} />
        </div>
      </div>
    </li>
  );
}

export default EachPostHomePage;
