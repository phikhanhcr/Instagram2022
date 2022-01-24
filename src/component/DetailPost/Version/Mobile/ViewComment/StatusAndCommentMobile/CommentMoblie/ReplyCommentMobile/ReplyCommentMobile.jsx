import ContentCommentMobile from "../../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../../ChildrenComponent/ViewCommentAvatar";

function ReplyCommentMobile({ comment, handleClickReply, commentId }) {
  return (
    <ul className="mt-3">
      {comment.comment_replied.length &&
        comment.comment_replied.map((ele, index) => (
          <li className="flex mt-3" key={index}>
            <ViewCommentAvatar avatar={ele.avatar} />
            <div className="flex-1">
              <ContentCommentMobile
                handleClickReply={handleClickReply}
                commentId={commentId}
                userId={ele.user_id}
                username={ele.username}
                content={ele.comment_id.content}
                reply={ele.reply_to.username}
              />
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ReplyCommentMobile;
