import React, { useState, memo } from "react";
import CommentRelied from "./CommentRelied";
import { convertToRelativeTime } from "../../../../../../../utils/convert-timezone";

function EachComment({ comment, handleClickReply }) {
  const [checkHide, setCheckHide] = useState(false);
  const handleSetHide = () => {
    setCheckHide((pre) => !pre);
  };
  return (
    <li className="mb-4">
      <div className="flex text-sm items-center">
        <div
          className="self-start w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mt-1 mr-[14px]"
          style={{
            backgroundImage: `url(${comment.user_avatar})`,
          }}
        ></div>
        <div className="flex-1 flex">
          <a href="/" className="font-medium mr-1 hover:underline">
            {comment.user_name}
          </a>
          <p className="inline-block max-w-[170px] overflow-x-hidden">
            {comment.content}{" "}
          </p>
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
      <div className="relative text-[11px] pl-10">
        <div className="flex mt-2 items-center  opacity-70">
          <span className="cursor-pointer mr-2">{
            convertToRelativeTime(comment.created_at)
          }</span>
          <span className="cursor-pointer mr-2">19 lượt thích</span>
          <span
            onClick={() =>
              handleClickReply({
                parent_id: comment.id,
                username: comment.user_name,
                avatar: comment.user_avatar,
                userId: comment.user_id,
              })
            }
            className="cursor-pointer mr-2"
          >
            Trả lời
          </span>
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
    
        {comment.reply_count > 0 && (
          <>
            <br />
            <button onClick={handleSetHide} type="button">
              <div className="align-middle border-b-[1px] border-solid inline-block w-6 h-0 mr-4 border-[#7a7a7a]"></div>
              {checkHide ? (
                <span onClick={() => setCheckHide(true)}>Ẩn câu trả lời</span>
              ) : (
                <span onClick={() => setCheckHide(false)}>
                  Xem câu trả lời ({comment.reply_count})
                </span>
              )}
            </button>
            {checkHide && (
              <CommentRelied
                handleClickReply={handleClickReply}
                comment={comment}
              />
            )}
          </>
        )}
      </div>
    </li>
  );
}

export default memo(EachComment);
