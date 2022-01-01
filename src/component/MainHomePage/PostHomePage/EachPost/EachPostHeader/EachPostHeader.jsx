import { useState } from "react";
import { Link } from "react-router-dom";

function PostHeader() {
  const [displayOptionsModal, setDisplayOptionsModal] = useState(false);
  return (
    <div className="post-section__header flex justify-between p-3.5">
      <div className="post-section__header-avatar_name flex items-center">
        <div
          className="post-section__header-avatar w-[32px] h-[32px] bg-cover bg-no-repeat bg-center rounded-full flex cursor-pointer"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEjOYggB8FSaPSeVuuoU-x7SvUmO0fAlxTMZYWS7rzhQkQ53gbRLjaTDLK98SsrmoRgE&usqp=CAU)",
          }}
        ></div>
        <a
          href
          className="post-section__header-name font-semibold text-sm ml-3.5 block hover:underline"
        >
          air.huyen
        </a>
      </div>
      <div
        className="post-section__header-menu cursor-pointer"
        id="post-section__header-menu"
        onClick={() => setDisplayOptionsModal(true)}
      >
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

      {displayOptionsModal ? (
        <div
          className="fixed top-0 right-0 left-0 bottom-0 z-[3] animate-showModal bg-black bg-opacity-70"
          onClick={() => setDisplayOptionsModal(false)}
        ></div>
      ) : (
        ""
      )}
      {displayOptionsModal ? (
        <div
          className="overflow-hidden fixed top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] md:w-[400px] border border-solid border-[#5a5a5a] h-[336px] rounded-xl max-h-full z-10 bottom-0 transition-all bg-white"
          id="menuModal"
        >
          <ul className="menu--modal__list">
            <li className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd] text-red-600">
              <b>Báo cáo</b>
            </li>
            <li className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd] text-red-600">
              <b>Bỏ theo dõi</b>
            </li>
            <li className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd]">
              <Link to={`/post/1`}>Đi tới bài viết</Link>
            </li>
            <li className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd]">
              Chia sẻ lên..
            </li>
            <li className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd]">
              Sao chép liên kết
            </li>
            <li className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd]">
              Nhúng
            </li>
            <li
              className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd]"
              onClick={() => setDisplayOptionsModal(false)}
            >
              Hủy
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PostHeader;
