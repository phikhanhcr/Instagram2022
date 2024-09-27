function HeaderListMessage({ onClickBack }) {


  return (
    <div className="fixed top-0 right-0 left-0 md:relative z-[2] bg-white px-2 md:px-5 h-[60px] w-full flex items-center border border-solid border-[#ccc]">
      <div
        className="rotate-[270deg] mr-2 cursor-pointer block md:hidden"
        onClick={() => onClickBack()}
      >
        <svg
          aria-label="Quay lại"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height={24}
          role="img"
          viewBox="0 0 48 48"
          width={24}
        >
          <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
        </svg>
      </div>
      <div
        className="bg-center mr-3 bg-cover bg-no-repeat rounded-full w-[26px] h-[26px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507065938252-17f453893fc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80)",
        }}
      />
      <div className="flex-1">
        <div className="font-semibold text-sm">kckatalbas</div>
        <div className="font-normal text-xs opacity-50">
          Hoạt động 2 giờ trước
        </div>
      </div>
      <div className="cursor-pointer">
        <svg
          aria-label="Xem chi tiết cuộc trò chuyện"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height={24}
          role="img"
          viewBox="0 0 48 48"
          width={24}
        >
          <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
          <circle
            clipRule="evenodd"
            cx={24}
            cy="14.8"
            fillRule="evenodd"
            r="2.6"
          />
          <path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
          <path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z" />
        </svg>
      </div>
    </div>
  );
}

export default HeaderListMessage;
