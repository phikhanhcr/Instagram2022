import EachItemLike from "./EachItemLike";

function ModelLikedUser({ data }) {
  return (
    <div className="z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] md:w-auto flex items-center justify-center overflow-hidden transition-all">
      <div className="h-[450px] w-[400px] border border-solid bg-white rounded-xl z-[4]">
        <div className="font-semibold text-base text-center py-3 border-b ">
          Lượt thích
        </div>
        <ul className="h-[400px] max-h-[450px] overflow-y-auto rounded-xl">
          {data.length &&
            data.map((ele, index) => <EachItemLike data={ele} key={index} />)}
        </ul>
      </div>
    </div>
  );
}
export default ModelLikedUser;
