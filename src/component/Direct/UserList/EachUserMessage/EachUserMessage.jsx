import { Link } from "react-router-dom";

function EachUserMessage({ info, onClickEvent, userActive }) {
  const handleClick = () => {
    onClickEvent(info.id);
  };
  return (
    <Link to={`${info.id}`}>
      <li
        onClick={handleClick}
        className={
          userActive === info.id
            ? "hover:bg-gray-100 cursor-pointer flex items-center py-2 px-5 direct-message__user message-active"
            : "hover:bg-gray-100 cursor-pointer flex items-center py-2 px-5 direct-message__user"
        }
      >
        <div
          style={{
            backgroundImage: `url(${info.members.length === 2 ? info.members[0].avatar : info.avatar})`,
          }}
          className="mr-3 bg-center bg-cover bg-no-repeat rounded-full w-[56px] h-[56px]"
        />
        <div className="flex-1">
          <div className="font-medium text-sm opacity-90 text-[#494949]">
            {info.name}
          </div>
          <div className="font-normal text-sm opacity-50">
            Hoạt động 2 giờ trước
          </div>
        </div>
      </li>
    </Link>
  );
}

export default EachUserMessage;
