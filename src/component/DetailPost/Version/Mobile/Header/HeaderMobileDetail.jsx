function HeaderMobileDetail({ onCLickClose, post }) {
  return (
    <div className="header flex p-4">
      <div
        className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mr-[14px] "
        style={{
          backgroundImage: `url(${post.user_avatar})`,
        }}
      ></div>
      <div className="flex-1">
        <a href="/" className="text-sm font-semibold hover:underline">
          {post.username}
        </a>
        <span> {" "}• {" "}</span>
        <span className="font-semibold text-[#0095f6] text-sm">Theo dõi</span>
      </div>
      <div onClick={onCLickClose}>
        <svg
          aria-label="Tùy chọn khác"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height={24}
          role="img"
          viewBox="0 0 24 24"
          width={24}
        >
          <circle cx={12} cy={12} r="1.5" />
          <circle cx="6.5" cy={12} r="1.5" />
          <circle cx="17.5" cy={12} r="1.5" />
        </svg>
      </div>
    </div>
  );
}
export default HeaderMobileDetail;
