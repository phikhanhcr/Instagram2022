import ContentCommentMobile from "../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../ChildrenComponent/ViewCommentAvatar";
import useDetailPost from "../../../../../../../customHooks/useDetailPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { eachPostInit } from "../../../../../../../redux/features/detailPost/detailPost";
import { useParams } from "react-router-dom";
function StatusMoblie() {
  const idPost = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(eachPostInit(idPost.idPost));
    return () => {
      promise.abort();
    };
  }, [dispatch, idPost]);
  const { post, isLoading } = useDetailPost(idPost);

  return (
    <>
      {isLoading && <>Loading...</>}
      {post._id && (
        <ul className="border-b border-solid border-[#e2e2e2] pb-5">
          <li className="flex">
            <ViewCommentAvatar avatar={post.user_avatar} />
            <div className="text-xs flex-1">
              <ContentCommentMobile
                isStatus
                username={post.username}
                content={post.description}
              />
            </div>
          </li>
        </ul>
      )}
    </>
  );
}
export default StatusMoblie;
