function CaptionStatus({ post }) {
  return (
    <div className="post-section__status">
      <a href="/" className="font-semibold mb-2 block">
        {post.like_count} lượt thích
      </a>
      <div className="text-sm">
        <a href="/" className="font-semibold hover:underline ">
          {post.userId.username}{" "}
        </a>
        <span className="opacity-80">{post.description} </span>
      </div>
      {/* comment section */}
    </div>
  );
}

export default CaptionStatus;
