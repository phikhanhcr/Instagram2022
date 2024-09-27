import useDetailPost from "../../../../../../customHooks/useDetailPost";

function HeaderPostDetail({ onCLickClose, postProps }) {
  let { post, isLoading } = useDetailPost();
  if (postProps) {
    post = { ...postProps };
  }
  return (
    <>
      {post.id && (
        <div className=" header  flex items-center justify-between py-2 px-4 lg:p-4 border border-solid border-[#ccc]">
          <div
            className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mr-[14px] "
            style={{
              backgroundImage: `url(${post.user_avatar})`,
            }}
          ></div>
          <div className="flex-1">
            <div className="flex text-sm items-center">
              <a href="/" className="font-medium mr-1 hover:underline">
                {post.username}
              </a>
              <span className="text-[#0095f6] font-semibold">• Theo dõi</span>
            </div>
            <div className="cursor-pointer text-xs leading-4">
              ducphong271103 • Âm thanh gốc
            </div>
          </div>
          <div className="cursor-pointer" onClick={onCLickClose}>
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
      )}
    </>
  );
}

export default HeaderPostDetail;
