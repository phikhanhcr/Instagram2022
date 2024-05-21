import ItemUseFollow from "./ItemUseFollow";

function ListUserFollow({ data }) {
  return (
    <div className="max-h-[90%] flex-1 rounded-xl overflow-hidden">
      <ul className="h-full overflow-y-auto rounded-xl">
        {
          data.map((item, index) => (
            <ItemUseFollow key={index} data={item} />
          ))
        }
      </ul>
    </div>
  );
}

export default ListUserFollow;
