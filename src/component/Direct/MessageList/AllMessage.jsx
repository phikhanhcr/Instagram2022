import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useMessage from "../../../customHooks/useMessage";
import { getMessagesAsyncById } from "../../../redux/features/message/messageSlice";

import HeaderListMessage from "./HeaderListMessage/HeaderListMessage";
import InputMessage from "./InputMessage/InputMessage";
import ListMessage from "./List/ListMessage";

function MessageList({ onClickBack, conversationId }) {
  // get list messages here based on conversationId
  const { messages } = useMessage();

  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(getMessagesAsyncById(conversationId));

    return () => promise.abort();
  }, [conversationId, dispatch]);

  return (
    <div
      className="flex flex-col w-full md:w-8/12 h-full"
      id="direct-message__modal"
    >
      {messages && conversationId ? (
        <>
          <HeaderListMessage onClickBack={onClickBack} />
          <ListMessage messages={messages} />
          <InputMessage />
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <>Select to show message </>
        </div>
      )}
    </div>
  );
}

export default MessageList;
