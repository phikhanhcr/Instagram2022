import HeaderViewComment from "./ChildrenComponent/HeaderViewComment";
import ViewCommentAvatar from "./ChildrenComponent/ViewCommentAvatar";
import StatusAndCommentMobile from "./StatusAndCommentMobile/StatusAndCommentMobile";
import useAuthentication from "../../../../../customHooks/useAuthentication";
import AddCommentMobile from "./ChildrenComponent/AddCommentMobile";
import { useState } from "react";
import { useParams } from "react-router-dom";
function ViewComment() {
  const { user } = useAuthentication();
  const { avatar } = user;
  const { idPost } = useParams();
  const [commentInfo, setCommentInfo] = useState({});
  const [usernameReplied, setUsernameReplied] = useState("");

  const handleClickReply = (data) => {
    setUsernameReplied(data.username);
    setCommentInfo(data);
  };
  return (
    <section className="view-comment bg-white">
      <HeaderViewComment />

      <div className="fixed top-[56px] h-[65px] w-full right-0 left-0 bg-gray-200">
        <div className="flex h-full items-center px-4">
          <ViewCommentAvatar avatar={avatar} />
          <AddCommentMobile
            postId={idPost}
            commentInfo={commentInfo}
            usernameReplied={usernameReplied}
            setUsernameReplied={setUsernameReplied}
          />
        </div>
        {/* status post */}
        {/* calculate height of screen minus 62px */}

        <StatusAndCommentMobile handleClickReply={handleClickReply} />
      </div>
    </section>
  );
}

export default ViewComment;
