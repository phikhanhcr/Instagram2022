import CaptionPcTablet from "./CaptionPcTablet/CaptionPcTablet";
import PictureTablet from "./PictureTablet";

function PostPcTablet({ onCLickClose, post }) {
  return (
    <div className="hidden md:block md:px-3.5 lg:mx-0">
      <div className="flex flex-wrap justify-center">
        <div className="h-[700px] flex">
          {/* images */}
          <PictureTablet images={post.images}/>

          <CaptionPcTablet onCLickClose={onCLickClose}/>
        </div>
      </div>
    </div>
  );
}

export default PostPcTablet;
