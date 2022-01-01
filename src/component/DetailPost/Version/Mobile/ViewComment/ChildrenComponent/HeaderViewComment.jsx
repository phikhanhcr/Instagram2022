function HeaderViewComment() {
  return (
    <div className="fixed top-0 right-0 left-0 w-full h-header_height bg-white flex items-center z-10">
      <div className="absolute rotate-[270deg] px-4 cursor-pointer">
        <svg
          aria-label="Quay lại"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height={24}
          role="img"
          viewBox="0 0 24 24"
          width={24}
        >
          <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
        </svg>
      </div>
      <div className="flex-1">
        <h2 className="text-center text-sm font-semibold">Bình luận</h2>
      </div>
    </div>
  );
}
export default HeaderViewComment;
