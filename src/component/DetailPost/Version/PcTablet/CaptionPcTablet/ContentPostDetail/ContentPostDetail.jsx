import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useDetailPost from "../../../../../../customHooks/useDetailPost";
import { commentAsyncIdPost } from "../../../../../../redux/features/comment/commentSlice";
import useComment from "../../../../../../customHooks/useComment";
import EachComment from "./EachComment/EachComment";
function ContentPostDetail() {
  const { post } = useDetailPost();
  const postId = post._id;
  const dispatch = useDispatch();
  const { comment, isLoading } = useComment();
  
  useEffect(() => {
    const promise = dispatch(commentAsyncIdPost(postId));
    return () => {
      promise.abort();
    };
  }, [dispatch, postId]);
  
  return (
    <>
      {isLoading ? <div>Loading...</div> : ""}
      <div className="main py-2 px-4 lg:p-4 min-h-[67%] h-[67%]  scrollbar-hide overflow-y-scroll ">
        <div className="post flex text-sm mb-2">
          <div
            className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mr-[14px] mt-1"
            style={{
              backgroundImage: `url(${post.userId.avatar})`,
            }}
          ></div>
          <div className="flex-1 mt-1">
            <a href="/" className="font-medium mr-1 hover:underline">
              {post.userId.username}
            </a>
            {post.description}
          </div>
        </div>

        {/* comment */}
        <div className="comment">
          <ul className="h-auto">
            {/* list comment */}
            {
              comment.length && comment.map((ele, index) => (
                <EachComment key={index} comment={ele}/>
              ))
           
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContentPostDetail;
