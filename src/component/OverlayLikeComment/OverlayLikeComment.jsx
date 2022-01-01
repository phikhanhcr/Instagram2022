function OverlayLikeComment() {
  return (
    <>
      <div className="group-hover:flex hidden absolute bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 items-center justify-center">
        <div className="mr-2 text-white flex items-center">
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
          <span className="font-weight-600 text-white font-size-16 mr-3">
            1,200
          </span>
        </div>
        <div className="text-white flex items-center">
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
          <span className="font-weight-600 text-white font-size-16 mr-3">
            1,200
          </span>
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <svg
          aria-label="Video"
          className="_8-yf5 edmGD"
          color="#ffffff"
          fill="#ffffff"
          height={24}
          role="img"
          viewBox="0 0 48 48"
          width={24}
        >
          <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path>
        </svg>
      </div>
    </>
  );
}

export default OverlayLikeComment;
