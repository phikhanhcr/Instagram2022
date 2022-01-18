import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useCommentReplied from "../../../../../../../../customHooks/useCommentReplied";
import { commentRepliedAsyncIdCommentRoot } from "../../../../../../../../redux/features/comment/commentRepliedSlice";
import ContentLoaderComponent from "../../../../../../../Commom/ContentLoader";
import ContentCommentMobile from "../../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../../ChildrenComponent/ViewCommentAvatar";

function ReplyCommentMobile({ commentId }) {
  const dispatch = useDispatch();
  const { comment_replied, isLoading, status } = useCommentReplied();

  useEffect(() => {
    const promise = dispatch(commentRepliedAsyncIdCommentRoot(commentId));

    return () => {
      promise.abort();
    };
  }, [dispatch, commentId]);

  return (
    <ul className="mt-3">
      {
        isLoading && <ContentLoaderComponent />
      }
      {
        comment_replied.length && comment_replied.map((ele, index) => (
          <li className="flex">
            <ViewCommentAvatar avatar={ele.avatar}/>
            <div className="flex-1">
              <ContentCommentMobile username={ele.username} content={ele.content} reply={ele.reply_to.username}/>
            </div>
          </li>
        ))
      }
      
    </ul>
  );
}

export default ReplyCommentMobile;
