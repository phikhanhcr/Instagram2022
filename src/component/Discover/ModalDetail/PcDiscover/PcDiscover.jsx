import { memo } from "react";
import CaptionPcTablet from "../../../DetailPost/Version/PcTablet/CaptionPcTablet/CaptionPcTablet";
import ImagesSlidePcDiscover from "./ImagesSlidePcDiscover";

function PcDiscover({ data }) {

  const onCLickClose = () => {};
  return (
    <div
      className="
      hidden
      md:flex 
      box-border
      w-full 
      sm:h-[40%]
      md:h-[60%]
      md:w-[90%]
      lg:h-[92%]
      lg:w-[90%]
      justify-center 
      items-center 
      relative
      "
    >
      <ImagesSlidePcDiscover urls={data.images}/>
     
      <CaptionPcTablet onCLickClose={onCLickClose} post={data} postId={data._id}/>
      {/* {showModal && <OverlayMenuPost onCLickClose={onCLickClose} />} */}
    </div>
  );
}

export default memo(PcDiscover);
