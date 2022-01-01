import OverlayLikeComment from "../../OverlayLikeComment/OverlayLikeComment";

function EachOtherPost() {
  return (
    <div className="w-6/12 md:w-4/12 px-1 md:px-3.5  md:mb-7 mb-2">
      <div
        className="group cursor-pointer relative w-full h-[305px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1636167286929-6e583bcef820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)",
        }}
      >
        <OverlayLikeComment />
      </div>
    </div>
  );
}

export default EachOtherPost;
