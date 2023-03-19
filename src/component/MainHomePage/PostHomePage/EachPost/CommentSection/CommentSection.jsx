function CommentSection() {
  return (
    <div className="text-sm">
      <p
        className="cursor-pointer opacity-70 my-1"
      >
        Xem tất cả 29 bình luận
      </p>

      <ul className>
        <li className="overflow-hidden inline-block">
          <a href="/" className="font-semibold hover:underline">
            phikhanhcris{" "}
          </a>
          <span className="opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptate praesentium perspiciatis vel quae, magnam veniam similique
            nam, voluptatibus voluptates sunt maxime explicabo cupiditate et.
            Explicabo maiores doloribus asperiores. Consectetur.
          </span>
        </li>
      </ul>
      <div className="time-comment">
        <p>3 giờ trước</p>
      </div>
    </div>
  );
}

export default CommentSection;
