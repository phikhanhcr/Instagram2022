function ContentNotification({ data }) {
  const creativeContent = (data) => {
    if (data.type === "follow") {
      return (
        <span>
          đã bắt đầu theo dõi bạn.
        </span>
      );
    } else if (data.type === "like") {
      return (
        <span>
          đã thích bài viết của bạn.
        </span>
      );
    } else if (data.type === "mentioned") {
      return (
        <span>
          đã nhắc đến bạn trong bình luận:
          <a className="primary-color" href="/" tabIndex={0}>
            {" @phikhanhcris"}
          </a>
       
          {data.commentContent}
        </span>
      );
    } else if (data.type === "comment") {
      return (
        <span>
          đã bình luận trong bài viết của bạn
          <a className="primary-color" href="/" tabIndex={0}>
            {" @phikhanhcris"}
          </a>
        </span>
      );
    }
  };

  return (

    <div href="/" className="flex flex-1 my-0 mx-2 items-centerblock">
      <span className="inline m-0 text-sm">
        <a
          className="font-weight-600 notification-username"
          title="mabel.daisyy"
          href="/"
          tabIndex={0}
        >
          {data.sender.username}   {" "}
        </a>
        {creativeContent(data)}
        <time className="opacity-40 text-sm ml-[7px]">1 tuần</time>
      </span>
    </div>
  );
}

export default ContentNotification;
