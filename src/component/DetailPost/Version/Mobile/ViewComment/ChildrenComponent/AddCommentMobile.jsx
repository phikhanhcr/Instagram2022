import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCommentAsync } from "../../../../../../redux/features/comment/commentSlice";

function AddCommentMobile({
  commentInfo,
  postId,
  usernameReplied,
  setUsernameReplied,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmitForm = () => {
    if (usernameReplied !== "") {
      dispatch(
        createCommentAsync({
          post_id: postId,
          content: input.trim(),
          comment_root_id: commentInfo.commentRoot,
          reply_to: commentInfo.userId,
        })
      );
    } else {
      dispatch(
        createCommentAsync({
          post_id: postId,
          content: input.trim(),
        })
      );
    }
    setInput("");
  };

  const handleChangeInput = (e) => {
    e.currentTarget.addEventListener("keydown", (event) => {
      const { key } = event;
      if (
        e.target.value.length === 0 &&
        (key === "Backspace" || key === "Delete")
      ) {
        setUsernameReplied("");
      }
    });
    setInput(e.target.value);
  };
  
  return (
    <div className="flex-1">
      <div className="flex bg-white overflow-hidden rounded-3xl px-3 text-sm">
        {commentInfo.username && usernameReplied !== "" && (
          <div className="relative flex items-center">
            <span className="mx-1 text-[#00376b]">@{commentInfo.username}</span>
          </div>
        )}
        <input
          type="text"
          className="w-full rounded-3xl py-3 mr-2 outline-none"
          placeholder="Thêm bình luận...."
          value={input}
          onChange={handleChangeInput}
        />
        <button
          onClick={handleSubmitForm}
          type="submit"
          className="text-[#0095f6] font-semibold"
        >
          Đăng
        </button>
      </div>
    </div>
  );
}

export default AddCommentMobile;
