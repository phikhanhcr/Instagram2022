function ContentCommentMobile({
  username,
  content,
  reply,
  handleClickReply,
  isStatus,
  commentId,
  userId
}) {
  return (
    <>
      <div className="flex">
        <a href="/" className="font-semibold mr-2">
          {username}
        </a>
        {reply ? (
          <span>
            <a href="/" className="text-[#00376b] inline-block">
              @{reply}
            </a>{" "}
            <span>{content} </span>
          </span>
        ) : (
          <span className="max-w-[170px] overflow-x-hidden">{content}</span>
        )}
      </div>

      {!isStatus ? (
        <div className="mt-1 opacity-70">
          <span className="mr-3 cursor-pointer">1 day</span>
          <span
            onClick={() =>
              handleClickReply({
                commentRoot: commentId,
                username: username,
                userId: userId,
              })
            }
            className="cursor-pointer"
          >
            Reply
          </span>
        </div>
      ) : (
        <div className="mt-1 opacity-70">
          <span className="mr-3 cursor-pointer">1 day</span>
        </div>
      )}
    </>
  );
}

export default ContentCommentMobile;
