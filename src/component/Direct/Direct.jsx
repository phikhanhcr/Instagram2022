import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../assert/tailwind/build/styleTailwind.css";
import Header from "../Header/Header";
import "./Direct.css";
import MessageList from "./MessageList/AllMessage";
import UserList from "./UserList/UserList";
import useConversation from "../../customHooks/useConversation";
import { getConversationsAsyncById } from "../../redux/features/conversation/conversationSlice";
function Direct() {
  const dispatch = useDispatch();
  const { conversations, isLoading } = useConversation();
  useEffect(() => {
    const promise = dispatch(getConversationsAsyncById());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const [conversationId, setConversationId] = useState(null);
  const [checkMobile, setCheckMobile] = useState(() => {
    const checkMobileWidth = window.innerWidth;
    return checkMobileWidth <= 767;
  });
  const [checkDisplay, setCheckDisplay] = useState(false);

  useEffect(() => {
    const checkMobileWidth = window.innerWidth;
    if (checkMobileWidth > 767) {
      setCheckMobile(false);
    }
    const handleChangeSize = (e) => {
      let newWidth = window.innerWidth;
      if (newWidth <= 767) {
        setCheckMobile(true);
      }
    };
    window.addEventListener("resize", handleChangeSize);
    return () => {
      return window.removeEventListener("resize", handleChangeSize);
    };
  }, []);

  const handleClickBack = () => {
    setCheckDisplay(false);
  };

  const clickEventHandle = (id) => {
    setConversationId(id);
    if (checkMobile) {
      setCheckDisplay(true);
    }
  };

  const handleClickOverlay = () => {
    const overlayModel = document.getElementById("overlay-message");
    const allMenuModal = document.querySelectorAll(".message__menu-modal");
    allMenuModal.forEach((ele) => {
      ele.style.display = "none";
    });
    overlayModel.style.display = "none";
  };

  const handleDisplay = () => {
    if (!checkMobile) {
      // pc
      return (
        <div className="flex border border-solid border-[#ccc] h-screen md:h-[650px] relative">
          <UserList
            clickEventHandle={clickEventHandle}
            userActive={conversationId}
            listUser={conversations}
          />

          <MessageList
            conversationId={conversationId}
          />
        </div>
      );
    } else {
      // mobile
      if (!checkDisplay) {
        return (
          <div className="flex border border-solid border-[#ccc] h-[screen] md:h-[850px] relative">
            <UserList
              clickEventHandle={clickEventHandle}
              userActive={conversationId}
              listUser={conversations}
            />
          </div>
        );
      } else {
        return (
          <div className="flex border border-solid border-[#ccc] h-screen md:h-[850px] relative">
            <MessageList
              onClickBack={handleClickBack}
            />
          </div>
        );
      }
    }
  };

  return (
    <>
      <Header />

      <div className="md:pt-header_height w-[100%] lg:w-full max-w-[975px] mx-auto my-0 p-0 mt-10">
        {handleDisplay()}

        <div
          id="overlay-message"
          className="overlay-message hidden fixed top-0 right-0 bottom-0 left-0 z-[1]"
          onClick={handleClickOverlay}
        ></div>

        <div
          id="overlay-message__touch-hold--on-mobile"
          // flex
          className="animate-showModal bg-black bg-opacity-30 fixed top-0 right-0 bottom-0 left-0 z-[11]  hidden items-center justify-center"
        >
          <div className="bg-white flex flex-col w-[260px] rounded-xl overflow-hidden">
            <button
              className="hover:bg-gray-400 border rounded-t-xl text-sm min-h-[48px] px-2 py-1"
              id="message__touch-btn--copy"
            >
              Sao chép
            </button>
            <button
              className="hover:bg-gray-400 border border-solid text-sm min-h-[48px] px-2 py-1"
              id="message__touch-btn--remove"
            >
              Thu hồi
            </button>
            <button
              className="hover:bg-gray-400 border border-solid rounded-b-xl text-sm min-h-[48px] px-2 py-1"
              id="message__touch-btn--cancel"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Direct;
