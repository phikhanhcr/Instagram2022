import OverlayLikeComment from "../../OverlayLikeComment/OverlayLikeComment";

function EachOtherPost({ data }) {
  return (
    <div className="w-6/12 md:w-4/12 px-1 md:px-3.5  md:mb-7 mb-2">
      <div
        className="group cursor-pointer relative w-full h-[305px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url(${data.images[0]})`,
        }}
      >
        <OverlayLikeComment like={data.like_count} comment={data.comment_count}/>
      </div>
    </div>
  );
}

export default EachOtherPost;
