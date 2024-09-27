import { useState } from "react";
import ContentCommentMobile from "../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../ChildrenComponent/ViewCommentAvatar";
import ReplyCommentMobile from "./ReplyCommentMobile/ReplyCommentMobile";

function EachCommentMobile({ comment, handleClickReply }) {
  const [checkShow, setCheckShow] = useState(false);
  return (
    <li className="flex mt-4 pb-3">
      <ViewCommentAvatar avatar={comment.user_avatar} />
      <div className="text-xs flex-1">
        <ContentCommentMobile
          commentId={comment.id}
          username={comment.user_name}
          content={comment.content}
          handleClickReply={handleClickReply}
          userId={comment.user_id}
        />
        {comment.reply_count > 0  && (
          <div className="mt-3">
            <button className="opacity-70" type="button">
              <div className="border-b border-[#2e2e2e] border-solid inline-block h-0 w-6 align-middle mr-4" />
              {checkShow ? (
                <span onClick={() => setCheckShow(false)}>Ẩn câu trả lời</span>
              ) : (
                <span onClick={() => setCheckShow(true)}>
                  Xem câu trả lời ({comment.reply_count})
                </span>
              )}
            </button>
            {checkShow && (
              <ReplyCommentMobile
                comment={comment}
                handleClickReply={handleClickReply}
              />
            )}
          </div>
        )}
      </div>
    </li>
  );
}
export default EachCommentMobile;
