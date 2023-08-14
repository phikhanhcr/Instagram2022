import { useState } from "react";
import useAuthentication from "../../../../../customHooks/useAuthentication";

function EachMessage({ message }) {
  const [checkCLick, setCheckClick] = useState(false);
  const { user } = useAuthentication();
  const handleClick = () => {
    const allMenuModal = document.querySelectorAll(".message__menu-modal");
    const overlayModel = document.getElementById("overlay-message");

    allMenuModal.forEach((ele) => {
      ele.style.display = "none";
    });
    overlayModel.style.display = "block";

    setCheckClick((pre) => !pre);
  };
  return (
    <li
      className={
        message.sender === user.id
          ? "w-full flex justify-start items-end mb-2 group my-message"
          : "w-full flex justify-start items-end mb-2 group"
      }
    >
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1540804485132-9c94bcae6c66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)",
        }}
        className="bg-cover bg-no-repeat rounded-full w-[24px] h-[24px] mr-2 mb-2 my-message__my-avatar"
      />

      <div className="border border-solid rounded-[22px] min-h-[54px] h-auto text-sm p-4 my-message__my-content max-w-[244px] relative">
        <span className="break-words">{message.message}</span>
        {message.reaction ? (
          <button className="absolute animate-showModal -bottom-3 -left-0.5 p-1 bg-opacity-30 bg-gray-400 rounded-full ">
            <div className="text-xs md:text-sm">❤️</div>
          </button>
        ) : (
          ""
        )}
      </div>

      {/* option */}
      <div
        className="hidden md:block self-center ml-2 mr-2 relative"
        onClick={handleClick}
      >
        <svg
          aria-label="Thu hồi"
          className="cursor-pointer message_item-menu"
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
        {checkCLick && (
          <div className="min-w-[168px] py-[3px] items-center justify-around animate-showModal flex message__menu-modal z-10 absolute -top-9 -left-1 shadow-2xl text-white bg-black text-sm font-semibold rounded-lg px-2">
            <span className=" cursor-pointer z-10 message-like_btn">Like</span>
            <span className=" cursor-pointer z-10 message-copy_btn">Copy</span>
            <span className="cursor-pointer z-10 message-remove_btn">
              Remove
            </span>
            <div className="w-full absolute bottom-[-5px] left-[-100%] translate-x-[62%] z-0 report-message">
              <div className="w-[15px] h-[15px] m-auto bg-black rotate-[45deg]" />
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default EachMessage;
