import HeaderListMessage from "./HeaderListMessage/HeaderListMessage";
import InputMessage from "./InputMessage/InputMessage";
import ListMessage from "./List/ListMessage";

function MessageList({ testMessage, onClickBack }) {
  return (
    <div
      className="flex flex-col w-full md:w-8/12 h-full"
      id="direct-message__modal"
    >
      <HeaderListMessage onClickBack={onClickBack}/>
      <ListMessage testMessage={testMessage}/>
      <InputMessage />
      
    </div>
  );
}

export default MessageList;
