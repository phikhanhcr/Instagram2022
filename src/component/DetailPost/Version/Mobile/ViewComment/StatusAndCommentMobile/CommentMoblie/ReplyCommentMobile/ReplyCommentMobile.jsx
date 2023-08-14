import { useEffect,  useState } from "react";
import ContentCommentMobile from "../../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../../ChildrenComponent/ViewCommentAvatar";
import { BASE_API_BACKEND } from "../../../../../../../../config/common";
import axios from "axios";

function ReplyCommentMobile({ comment, handleClickReply }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `${BASE_API_BACKEND}/api/comments/get-comments-by-post`;
    const fetcHData = async () => {
      const response = await axios.post(
        url,
        {
          post_id: comment.post_id,
          parent_id: comment.id,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      );
      const data = response.data;

      if (data.error_code === 0) {
        setComments(data.data);
      }
    };
    fetcHData();
  }, [comment.id, comment.post_id]);

  return (
    <ul className="mt-3">
      {comments.length &&
        comments.map((ele, index) => (
          <li className="flex mt-3" key={index}>
            <ViewCommentAvatar avatar={ele.user_avatar} />
            <div className="flex-1">
              <ContentCommentMobile
                handleClickReply={handleClickReply}
                commentId={comment.id}
                userId={ele.user_id}
                username={ele.user_name}
                content={ele.content}
                reply={ele.parent_name}
              />
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ReplyCommentMobile;
