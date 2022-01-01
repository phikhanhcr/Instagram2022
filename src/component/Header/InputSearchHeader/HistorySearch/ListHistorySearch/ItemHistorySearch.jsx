function ItemHistorySearch() {
  return (
    <li className="flex items-center py-2 px-4 hover:bg-[rgb(245, 244, 244)]">
      <div className="header__wrapper-info_avatar h-[47px] w-[47px] rounded-full flex justify-center items-center has-story story-wrapper-section">
        <a href="/story.html" className="bg-white block p-[2px] rounded-full">
          <div
            className="info_avatar h-[39px] w-[39px] bg-center bg-no-repeat bg-cover rounded-full flex story-info_avatar"
            style={{
              backgroundImage:
                "url(https://cdn.bongdaplus.vn/Assets/Media/2021/05/18/77/Mason-Mount-xuat-sac-nhat-chelsea.jpg)",
            }}
          ></div>
        </a>
      </div>
      <div className="  ml-[10px] flex-1 items-center">
        <a href="/">
          <p className="text-sm mt-[-3px] mb-[-4px] font-semibold">
            m10_official{" "}
          </p>
          <p className="text-sm mb-[-4px]  opacity-50 mt-1">Mesut Özil</p>
        </a>
      </div>
      <div>
        <button className="header__content-history-search__remove">
          <svg
            aria-label="Đóng"
            className="_8-yf5 "
            color="#8e8e8e"
            fill="#8e8e8e"
            height={16}
            role="img"
            viewBox="0 0 48 48"
            width={16}
          >
            <path
              clipRule="evenodd"
              d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default ItemHistorySearch;
