import EachUserMessage from "./EachUserMessage/EachUserMessage";
import HeaderListUser from "./HeaderListUser/HeaderListUser";

function UserList({ userActive, listUser, clickEventHandle }) {
  return (
    
    <div
      className="md:flex w-full md:w-4/12 border-r border-solid border-[#ccc] h-full z-0 flex-col"
      id="direct-message__list"
    >
      {/* header */}
      <HeaderListUser />

      <div className="h-4 w-full flex md:hidden"></div>
      <ul className="overflow-hidden overflow-y-auto h-auto md:h-[638px] md:pt-0 flex-1">
        {listUser.map((ele, index) => (
          <EachUserMessage
            onClickEvent={clickEventHandle}
            key={index}
            info={ele}
            userActive={userActive}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
