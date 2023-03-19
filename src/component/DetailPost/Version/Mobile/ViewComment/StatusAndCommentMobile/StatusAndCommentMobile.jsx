import { useEffect, useRef } from "react";
import CommentMobile from "./CommentMoblie/CommentMobile";
import StatusMobile from "./StatusMobile/StatusMobile";

function StatusAndCommentMobile({ handleClickReply }) {
  const listRef = useRef();
  useEffect(() => {
    const height = window.innerHeight;
    listRef.current.style.height = `${height - 122}px`;
    const handleResizeChangeSize = () => {
      let height = window.innerHeight;
      listRef.current.style.height = `${height - 122}px`;
    };
    window.addEventListener("resize", handleResizeChangeSize);
    return () => {
      window.removeEventListener("resize", handleResizeChangeSize);
    };
  }, []);

  return (
    <div
      className="pt-4 h-[500px] overflow-y-auto pl-4 pr-2 z-10 bg-white"
      id="list-comment"
      ref={listRef}
    >
      <StatusMobile />

      <CommentMobile handleClickReply={handleClickReply}/>
    </div>
  );
}
export default StatusAndCommentMobile;
