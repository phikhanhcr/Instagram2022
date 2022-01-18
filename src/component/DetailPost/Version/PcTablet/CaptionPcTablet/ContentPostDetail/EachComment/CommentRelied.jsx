import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useCommentReplied from "../../../../../../../customHooks/useCommentReplied";
import { commentRepliedAsyncIdCommentRoot } from "../../../../../../../redux/features/comment/commentRepliedSlice";

function CommentRelied({ commentId }) {
  const dispatch = useDispatch();
  const { comment_replied, isLoading } = useCommentReplied();

  useEffect(() => {
    const promise = dispatch(commentRepliedAsyncIdCommentRoot(commentId));

    return () => {
      promise.abort();
    };
  }, [dispatch, commentId]);

  return (
    <div>
      {isLoading && <>Loading....</>}
      {comment_replied.length &&
        comment_replied.map((ele, index) => (
          <div key={index} className="flex flex-col text-sm mt-4">
            <div className="flex">
              <div
                className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mt-1 mr-[14px]"
                style={{
                  backgroundImage: `url(${ele.avatar})`,
                }}
              ></div>
              <div className="main flex-1">
                <a href="/" className="font-medium mr-1 hover:underline">
                  {ele.username}
                </a>
                <span>
                  <a href="/" className="text-[#00376b] inline-block">@{ele.reply_to.username}</a>
                  {" "}
                  {ele.content}{" "}
                </span>
              </div>
              <div>
                <svg
                  aria-label="Thích"
                  className="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height={12}
                  role="img"
                  viewBox="0 0 48 48"
                  width={12}
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </div>
            </div>
            <div className="flex mt-2  text-[10px] items-center pl-10">
              <span className="cursor-pointer opacity-70 mr-2">5 ngày</span>
              <span className="cursor-pointer opacity-70 mr-2">
                19 lượt thích
              </span>
              <span className="cursor-pointer opacity-70 mr-2">Trả lời</span>
              <div>
                <svg
                  aria-label="Tùy chọn bình luận"
                  className="_8-yf5 "
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height={24}
                  role="img"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <circle cx={12} cy={12} r="1.5" />
                  <circle cx="6.5" cy={12} r="1.5" />
                  <circle cx="17.5" cy={12} r="1.5" />
                </svg>
              </div>
            </div>
          </div>
        ))}
        
    </div>
  );
}

export default CommentRelied;
