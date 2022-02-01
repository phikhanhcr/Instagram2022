import { memo } from "react";
import OverlayLikeComment from "../../../OverlayLikeComment/OverlayLikeComment";

function EachItemNormalDiscover({ ele, onClickShowDetail }) {
  return (
    <div
      onClick={() => onClickShowDetail(ele)}
      className="w-4/12 px-[3px] md:px-3"
    >
      <div
        className="group w-full bg-cover bg-no-repeat bg-center relative mb-[5px] md:mb-6 discover-section_img"
        style={{
          backgroundImage: `url(${ele.images[0]})`,
        }}
      >
        <OverlayLikeComment />
      </div>
    </div>
  );
}

export default EachItemNormalDiscover
