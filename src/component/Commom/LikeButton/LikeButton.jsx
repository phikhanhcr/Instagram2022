import { useState } from "react";
import { toast } from "react-toastify";
import { socket } from "../../..";
import useAuthentication from "../../../customHooks/useAuthentication";
import { isValidToken } from "../../../utils/jwt";

function LikeButton({ post, setLikeCount }) {

  const { user } = useAuthentication();
  const [checkLike, setCheckLike] = useState(() => {
    let listUser = post ? post.like_list.map((ele) => ele._id) : [];
    return listUser.includes(user._id);
  });

  const handleCheckLike = async (type) => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken && (await isValidToken(accessToken))) {
      const optionFetch = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": window.localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ post_id: post._id }),
      };

      if (type === "like") {
        try {
          const response = await fetch(
            "http://localhost:3001/api/post/like",
            optionFetch
          );
          const data = await response.json();
          setCheckLike((pre) => !pre);
          setLikeCount((pre) => pre + 1);
          if (data.msg === "oke") {
            socket.emit("handle-post-like", {
              receiver: post.userId,
              sender: user._id,
              type: "like",
              rootContent: post,
            });
          }
        } catch (error) {
          toast.error("Too much request, please slowly");
        }
      } else {
        try {
          const response = await fetch(
            "http://localhost:3001/api/post/unlike",
            optionFetch
          );
          const data = await response.json();
          setCheckLike((pre) => !pre);
          setLikeCount((pre) => pre - 1);

          if (data.msg === "oke") {
            // socket io
            socket.emit("handle-post-unlike", {
              receiver: post.userId,
              sender: user._id,
              type: "like",
              rootContent: post,
            });
          }
        } catch (error) {
          toast.error("Too much request, please slowly");
        }
      }
    }
  };
  return (
    <button className="mr-4 border-0 bg-none cursor-pointer inline-flex justify-center items-center hover:opacity-80">
      {checkLike ? (
        <svg
          aria-label="Bỏ thích"
          className="_8-yf5 "
          color="#ed4956"
          fill="#ed4956"
          height="24"
          role="img"
          viewBox="0 0 48 48"
          width="24"
          onClick={() => handleCheckLike("unlike")}
        >
          <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
        </svg>
      ) : (
        <svg
          aria-label="Thích"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 48 48"
          width="24"
          onClick={() => handleCheckLike("like")}
        >
          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
        </svg>
      )}
    </button>
  );
}

export default LikeButton;
