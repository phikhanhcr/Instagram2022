import ListHistorySearch from "./ListHistorySearch/ListHistorySearch";

function HistorySearch() {
  return (
    <div className="header__content-history-search">
      <div className="arrow_above hidden lg:block" style={{ left: "50%" }} />
      <div className="my-1 mx-4 flex justify-between font-semibold text-base">
        <p>Gần đây</p>
        <p className="cursor-pointer text-xs text-[#0095f6]">Xóa tất cả</p>
      </div>
      <div className="overflow-y-scroll overflow-x-hidden max-h-[310px]">
        <ListHistorySearch />
      </div>
    </div>
  );
}

export default HistorySearch;
