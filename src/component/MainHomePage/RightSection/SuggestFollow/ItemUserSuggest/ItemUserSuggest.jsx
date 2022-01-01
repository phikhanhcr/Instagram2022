import ModalInfoUser from "./ModalInfoUser/ModalInfoUser";

function ItemUserSuggest() {
  return (
    <li className="people-might-know--item flex items-center py-2 hover:bg-[rgb(245, 244, 244)]">
      <div className="header__wrapper-info_avatar h-[47px] w-[47px] rounded-full flex justify-center items-center has-story">
        <a href="/story.html" className="bg-white block p-[2px] rounded-full">
          <div
            className="info_avatar h-[39px] w-[39px] bg-center bg-no-repeat bg-cover rounded-full flex story-info_avatar"
            style={{
              backgroundImage:
                "url(https://cdn.bongdaplus.vn/Assets/Media/2021/05/18/77/Mason-Mount-xuat-sac-nhat-chelsea.jpg)",
            }}
          ></div>
        </a>
      </div>
      <div className="  ml-[10px] flex-1 items-center">
        <a href="/" className="info-name-link relative group">
          <p className="text-sm mt-[-3px] mb-[-4px]  font-semibold">
            masonmount
          </p>
          <p className="text-sm mb-[-4px]  opacity-50 mt-1">
            Instagram đề xuất
          </p>
          <ModalInfoUser />
        </a>
      </div>
      <div>
        <a href="/" className="text-[#0095f6] font-semibold text-xs my-[-2px]">
          Theo dõi
        </a>
      </div>
    </li>
  );
}

export default ItemUserSuggest;
