import { memo } from "react";
import EachItemNormalDiscover from "./EachItemNormalDiscover/EachItemNormalDiscover";

function NormalDiscover({ onClickShowDetail, data }) {
   return (
    <div className="flex flex-wrap justify-between lg:-mx-3 mt-[3px] md:mt-6">
      {data.map((ele, index) => (
        <EachItemNormalDiscover
          ele={ele}
          key={index}
          onClickShowDetail={onClickShowDetail}
        />
      ))}
    </div>
  );
}

export default memo(NormalDiscover);
