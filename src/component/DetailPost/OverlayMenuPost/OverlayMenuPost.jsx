function OverlayMenuPost({ onCLickClose }) {
  return (
    <>
      <div
        onClick={onCLickClose}
        className="fixed top-0 right-0 left-0 bottom-0 z-[3] animate-showModal bg-black bg-opacity-70"
      ></div>
      <div
        className="overflow-hidden h-auto fixed top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] md:w-[400px] border border-solid border-[#5a5a5a]  rounded-xl  z-10 transition-all bg-white"
        id="menuModal"
      >
        <ul className="menu--modal__list">
          <li className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd] text-red-600">
            <b>Báo cáo</b>
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
            onClick={onCLickClose}
            className="hover:opacity-100 flex items-center justify-center cursor-pointer m-0 min-h-[48px] py-1 px-2 text-sm select-none align-middle font-semibold opacity-70 z-[101] border border-solid border-[#ddd]"
          >
            Hủy
          </li>
        </ul>
      </div>
    </>
  );
}
export default OverlayMenuPost;
