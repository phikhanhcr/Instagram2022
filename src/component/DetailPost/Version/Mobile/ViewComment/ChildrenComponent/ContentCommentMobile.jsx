function ContentCommentMobile({ username, content, reply }) {
  return (
    <>
      <div>
        <a href="/" className="font-semibold mr-2">
          {username}
        </a>
        {reply ? (
          <span>
            <a href="/" className="text-[#00376b] inline-block">
              @{reply}
            </a>{" "}
            {content}{" "}
          </span>
        ) : (
          <span>{content}</span>
        )}
      </div>

      <div className="mt-3 opacity-70">
        <span className="mr-3 cursor-pointer">1 day</span>
        <span className="cursor-pointer">Reply</span>
      </div>
    </>
  );
}

export default ContentCommentMobile;
