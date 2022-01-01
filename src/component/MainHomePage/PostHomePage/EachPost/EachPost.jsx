import { useState } from "react";
import ActionSection from "./ActionSection/ActionSection";
import AddComment from "./AddComment/AddComment";
import CaptionStatus from "./CaptionStatus/CaptionStatus";
import CommentSection from "./CommentSection/CommentSection";
import PostHeader from "./EachPostHeader/EachPostHeader";
import PostImages from "./PostImages/PostImage";

function EachPostHomePage() {
  
  const [checkLike, setCheckLike] = useState(false);

  const handleDbClick = () => {
    setCheckLike(true);
  }

  const handleCLickHeart = () => {
    setCheckLike(pre => !pre)
  }

  return (

    <li className="post_section-item mb-8">
      <div className="bg-[#fff] post-section w-full border border-solid border-[#ccc]">
        <div className="post-section__username-image">
          <PostHeader />
          <PostImages onDbCLick={handleDbClick}/>
        </div>

        <div className="post-section__action-comment py-[6px] px-[16px]">
          <ActionSection checkLike={checkLike} handleCheckLike={handleCLickHeart}/>
          {/* status  */}
          <CaptionStatus />

          {/* comment section */}
          <CommentSection />

          {/* post comment*/}
          <AddComment />
        </div>
      </div>
    </li>
  );
}

export default EachPostHomePage;
