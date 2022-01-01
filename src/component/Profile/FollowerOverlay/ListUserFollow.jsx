import ItemUseFollow from "./ItemUseFollow";

function ListUserFollow() {
  return (
    <div className="max-h-[90%] flex-1 rounded-xl overflow-hidden">
      <ul className="h-full overflow-y-auto rounded-xl">
        <ItemUseFollow />
        <ItemUseFollow />
        <ItemUseFollow />
        <ItemUseFollow />
        <ItemUseFollow />
        <ItemUseFollow />
        <ItemUseFollow />
        <ItemUseFollow />
        <ItemUseFollow />
      </ul>
    </div>
  );
}

export default ListUserFollow;
