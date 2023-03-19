// import ViewCommentAvatar from "../../ChildrenComponent/ViewCommentAvatar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useComment from "../../../../../../../customHooks/useComment";
import useDetailPost from "../../../../../../../customHooks/useDetailPost";
import { commentAsyncIdPost } from "../../../../../../../redux/features/comment/commentSlice";
import EachCommentMobile from "./EachCommentMobile";
import ContentLoaderComponent from "../../../../../../Commom/ContentLoader";
function CommentMobile({ handleClickReply }) {
  const { post } = useDetailPost();
  const idPost = post._id;
  const dispatch = useDispatch();
  const { comment, isLoading } = useComment();
  useEffect(() => {
    const promise = dispatch(commentAsyncIdPost(idPost));
    return () => {
      promise.abort();
    };
  }, [dispatch, idPost]);

  return (
    <>
      {isLoading ? (
        <ContentLoaderComponent />
      ) : (
        <ul>
          {comment && comment.length &&
            comment.map((ele, index) => (
              <EachCommentMobile
                key={index}
                comment={ele}
                handleClickReply={handleClickReply}
              />
            ))}
        </ul>
      )}
    </>
  );
}
export default CommentMobile;
