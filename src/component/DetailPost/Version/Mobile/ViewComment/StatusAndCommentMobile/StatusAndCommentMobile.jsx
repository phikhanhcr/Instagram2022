import { useEffect, useRef } from "react";
import CommentMoblie from "./CommentMoblie/CommentMoblie";
import StatusMoblie from "./StatusMoblie/StatusMoblie";

function StatusAndCommentMobile() {
  const listRef = useRef();
  useEffect(() => {
    console.log(listRef);
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
      className="pt-4 h-[500px] overflow-y-auto pl-4 pr-2"
      id="list-comment"
      ref={listRef}
    >
      <StatusMoblie />

     <CommentMoblie />
    </div>
  );
}
export default StatusAndCommentMobile;
