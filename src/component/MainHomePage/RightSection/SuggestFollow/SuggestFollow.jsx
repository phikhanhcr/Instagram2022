import ItemUserSuggest from "./ItemUserSuggest/ItemUserSuggest";

function SuggestFollow() {
  return (

    <div className="right-man__people-might-know mb-3">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold opacity-50">Gợi ý cho bạn</p>
        <p className="font-semibold text-xs cursor-pointer">
          Xem tất cả
        </p>
      </div>
      <ul className="people-might-know--list m-0 pl-0">
        <ItemUserSuggest />
        <ItemUserSuggest />
        <ItemUserSuggest />
        <ItemUserSuggest />
        <ItemUserSuggest />
      </ul>
    </div>
  );
}

export default SuggestFollow;
