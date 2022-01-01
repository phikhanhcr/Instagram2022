function ProfileEachPost({ type, src }) {
  const handleType = () => {
    if (type === "images") {
      return "";
    } else if (type === "video") {
      return (
        <svg
          aria-label="Video"
          className="_8-yf5 "
          color="#ffffff"
          fill="#ffffff"
          height={18}
          role="img"
          viewBox="0 0 48 48"
          width={18}
        >
          <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path>
        </svg>
      );
    } else if (type === "reels") {
      return (
        <svg
          aria-label="Clip"
          className="_8-yf5 "
          color="#ffffff"
          fill="#ffffff"
          height={18}
          role="img"
          viewBox="0 0 48 48"
          width={18}
        >
          <path d="M26.1 0L33 11.52H19.6L13.6.1a13.42 13.42 0 012.1-.1h10.4zM9.9.7l5.8 10.82H.4A13.09 13.09 0 014.1 4 12 12 0 019.9.7zM30.1 0h1.6c6 0 9.3 1.2 12.2 4.11a12.51 12.51 0 013.7 7.41H37zm1.7 29.06l-11.2-6.51A1.72 1.72 0 0018 24v13.08a1.79 1.79 0 002.5 1.6l.1-.1 11.2-6.51a1.7 1.7 0 00.1-2.91l-.1-.1-11.2-6.51zM0 15h48v16.77c0 6-1.2 9.32-4.1 12.22-2.8 2.71-6 4-11.7 4h-16c-6 0-9.3-1.2-12.2-4.11-2.7-2.8-4-6-4-11.72V15z"></path>
        </svg>
      );
    }

  };
  return (
    <div className="text-white  w-6/12 md:w-4/12 px-1 md:px-3.5 md:mb-7 mb-2">
      <div
        className="group cursor-pointer relative w-full h-[305px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url(${src})`,
        }}
      >
        <div className="group-hover:flex items-center justify-center hidden transition-all absolute bg-black bg-opacity-20 top-0 left-0 right-0 bottom-0">
          <div className="mr-7 flex items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              className="svg-inline--fa fa-heart fa-w-16 w-5 h-5 mr-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
            <span className="font-semibold text-base">340</span>
          </div>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="comment"
              className="svg-inline--fa fa-comment fa-w-16 w-5 h-5 mr-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
              ></path>
            </svg>
            <span className="font-semibold text-base">340</span>
          </div>
        </div>

        <div className="absolute top-[5%] right-[5%]">{handleType()}</div>
      </div>
    </div>
  );
}

export default ProfileEachPost;
