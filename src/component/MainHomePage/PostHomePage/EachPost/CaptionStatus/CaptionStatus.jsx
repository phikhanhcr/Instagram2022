import { useState, memo } from "react";
import ModelLikedUser from "../../../../Commom/ModelLikedUser/ModelLikedUser";

function CaptionStatus({ post }) {
  console.log(" re-render CaptionStatus")
  const [checkModel, setCheckModel] = useState(false);
  
  return (
    <div className="post-section__status">
      <div
        onClick={() => setCheckModel(true)}
        className="cursor-pointer font-semibold mb-2 block"
      >
        {post.like_count} lượt thích
      </div>
      <div className="text-sm">
        <a href="/" className="font-semibold hover:underline ">
          {post.username}{" "}
        </a>
        <span className="opacity-80">{post.description} </span>
      </div>
      {/* comment section */}
      {checkModel && (
        <ModelLikedUser data={post.top_likes} />
      )}
      {checkModel && (
        <div
          onClick={() => setCheckModel((pre) => !pre)}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z-[3] animate-showModal"
        ></div>
      )}
    </div>
  );
}

export default memo(CaptionStatus);
