import AddCommentPostDetail from "./AddCommentPostDetail/AddCommentPostDetail";
import ContentPostDetail from "./ContentPostDetail/ContentPostDetail";
import HeaderPostDetail from "./HeaderPostDetail/HeaderPostDetail";
import LikePostDetail from "./LikePostDetail/LikePostDetail";

function CaptionPcTablet({onCLickClose}) {
  return (
    <div className="w-[350px] md:min-w-[106px] lg:min-w-[206px] h-[100%] overflow-hidden scrollbar-hide  overflow-y-scroll bg-white rounded-r-sm flex-col flex border border-solid border-[#ccc]">
      <HeaderPostDetail onCLickClose={onCLickClose}/>
      <ContentPostDetail />
      {/* like icon */}
      <LikePostDetail />
      {/* add comment */}
      <AddCommentPostDetail />
    </div>
  );
}
export default CaptionPcTablet;
