import OverlayLikeComment from "../../OverlayLikeComment/OverlayLikeComment";
import EachItemDetail from "./EachItemDetail";

function TopDiscover({ data, onClickShowDetail }) {
  return (
    <div className="flex flex-wrap justify-between lg:-mx-3">
      {data.length && (
        <>
          <div className="w-4/12 px-[3px] md:px-3">
            <div
              className="group w-full bg-cover bg-no-repeat bg-center relative mb-[5px] md:mb-6 discover-section_img"
              style={{
                backgroundImage: `url(${data[0].images[0]})`,
              }}
              onClick={() => onClickShowDetail(data[0])}
            >
              <OverlayLikeComment />
            </div>
            {data[1] && (
              <div
                className="group w-full bg-cover bg-no-repeat bg-center relative discover-section_img"
                style={{
                  backgroundImage: `url(${data[1].images[0]})`,
                }}
                onClick={() => onClickShowDetail(data[1])}
              >
                <OverlayLikeComment />
              </div>
            )}
          </div>
          {data[2] && (
            <div className="w-8/12 px-[3px] md:px-3">
              <EachItemDetail
                onClickShowDetail={onClickShowDetail}
                data={data[2]}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TopDiscover;
