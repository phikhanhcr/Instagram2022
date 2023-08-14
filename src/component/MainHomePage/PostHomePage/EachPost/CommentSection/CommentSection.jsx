import { convertToRelativeTime } from "../../../../../utils/convert-timezone";

function CommentSection({ post }) {
  console.log(" re-render comment section")
  return (
    <div className="text-sm">
      {post.comment_count ? (
        <div>
          <p className="cursor-pointer opacity-70 my-1">
            Xem tất cả {post.comment_count} bình luận
          </p>
          <ul className>
            {post.top_comments.length &&
              post.top_comments.map((ele) => (
                <li className="overflow-hidden inline-block">
                  {/* redirect to user profile */}
                  <a href="/" className="font-semibold hover:underline">
                    {ele.user_name}{" "}
                  </a>
                  <span className="opacity-80">{ele.content}</span>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="time-comment">
        <p>{convertToRelativeTime(post.created_at)}</p>
      </div>
    </div>
  );
}

export default CommentSection;
