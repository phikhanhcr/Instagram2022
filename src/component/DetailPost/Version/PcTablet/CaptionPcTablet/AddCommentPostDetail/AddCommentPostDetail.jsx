import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCommentAsync } from "../../../../../../redux/features/comment/commentSlice";
function AddCommentPostDetail({
  commentInfo,
  postId,
  usernameReplied,
  setUsernameReplied,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (usernameReplied !== "") {
      dispatch(
        createCommentAsync({
          post_id: postId,
          content: input.trim(),
          parent_id: commentInfo.parent_id,
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
    <div className="input flex items-center flex-1 px-4 py-2 text-sm border-t border-solid border-[#e9e9e9]">
      <div>
        <svg
          aria-label="Biểu tượng cảm xúc"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height={24}
          role="img"
          viewBox="0 0 48 48"
          width={24}
        >
          <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
          <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
        </svg>
      </div>
      <div className="flex-1 w-full flex ml-1">
        {commentInfo.username && usernameReplied !== "" && (
          <div className="relative">
            <span className="ml-1 text-[#00376b]">@{commentInfo.username}</span>
          </div>
        )}
        <input
          type="text"
          className="w-full outline-none border-none pl-1 mr-1"
          placeholder="Thêm bình luận..."
          value={input}
          onChange={handleChangeInput}
          maxLength={120}
        />
      </div>
      <div>
        {input === "" ? (
          <button disabled className="text-[#0095f6] opacity-50">
            Đăng
          </button>
        ) : (
          <button onClick={handleAddComment} className="text-[#0095f6] ">
            Đăng
          </button>
        )}
      </div>
    </div>
  );
}

export default AddCommentPostDetail;
