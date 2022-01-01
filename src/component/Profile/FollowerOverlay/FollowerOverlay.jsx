import ListUserFollow from "./ListUserFollow";

function FollowerOverlay({ onCloseBtb }) {
  return (
   <>
    <div
      className="fixed bottom-0 top-0 right-0 left-0 bg-black bg-opacity-70 flex  z-10 items-center justify-center"
      id="overlay_profile-follower"
    >
      <div
        className="w-[400px] h-[400px] animate-showModal bg-white rounded-xl flex flex-col"
        id="list_profile-follower"
      >
        <div className="h-[43px]  relative flex items-center justify-center border-b border-solid border-[#e0e0e0]">
          <div className="text-center text-base font-semibold">
            Người theo dõi
          </div>
          <div
            className="absolute top-2 right-4 cursor-pointer"
            onClick={onCloseBtb}
          >
            <svg
              aria-label="Đóng"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={24}
              role="img"
              viewBox="0 0 48 48"
              width={24}
            >
              <path
                clipRule="evenodd"
                d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>


      <ListUserFollow />
      </div>
    </div>
   </>
  );
}

export default FollowerOverlay;
