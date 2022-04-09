import { useState } from "react";
import AddCommentPostDetail from "./AddCommentPostDetail/AddCommentPostDetail";
import ContentPostDetail from "./ContentPostDetail/ContentPostDetail";
import HeaderPostDetail from "./HeaderPostDetail/HeaderPostDetail";
import LikePostDetail from "./LikePostDetail/LikePostDetail";

function CaptionPcTablet({ onCLickClose, post, postId, postProps }) {
  // get comment root ,
  // reply to
  const [commentInfo, setCommentInfo] = useState({});

  const [usernameReplied, setUsernameReplied] = useState("");
  const handleClickReply = (data) => {
    setUsernameReplied(data.username);
    setCommentInfo(data);
  };
  return (
    <div className="w-[350px] md:min-w-[106px] lg:min-w-[206px] h-[100%] overflow-hidden scrollbar-hide  overflow-y-scroll bg-white rounded-r-sm flex-col flex border border-solid border-[#ccc]">
      <HeaderPostDetail postProps={post} onCLickClose={onCLickClose} />
      <ContentPostDetail postProps={post} handleClickReply={handleClickReply} />
      {/* like icon */}
      <LikePostDetail postProps={postProps}/>
      {/* add comment */}
      <AddCommentPostDetail
        postId={postId}
        usernameReplied={usernameReplied}
        setUsernameReplied={setUsernameReplied}
        commentInfo={commentInfo}
      />
    </div>
  );
}
export default CaptionPcTablet;
