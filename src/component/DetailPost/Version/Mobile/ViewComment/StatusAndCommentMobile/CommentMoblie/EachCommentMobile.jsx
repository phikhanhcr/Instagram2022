import { useState } from "react";
import ContentCommentMobile from "../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../ChildrenComponent/ViewCommentAvatar";
import ReplyCommentMobile from "./ReplyCommentMobile/ReplyCommentMobile";

function EachCommentMobile({ comment }) {
  const [checkShow, setCheckShow] = useState(false);
  return (
    <li className="flex mt-4 pb-3">
      <ViewCommentAvatar avatar={comment.avatar} />
      <div className="text-xs flex-1">
        <ContentCommentMobile
          username={comment.username}
          content={comment.content}
        />
        {comment.comment_replied_count > 0 && (
          <div className="mt-3">
            <button className="opacity-70" type="button">
              <div className="border-b border-solid inline-block h-0 w-6 align-middle mr-4" />
              <span onClick={() => setCheckShow((pre) => !pre)}>
                Xem câu trả lời ({comment.comment_replied_count})
              </span>
            </button>
            {checkShow && <ReplyCommentMobile commentId={comment._id} />}
          </div>
        )}
      </div>
    </li>
  );
}
export default EachCommentMobile;
