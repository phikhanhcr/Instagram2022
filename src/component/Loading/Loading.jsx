import { useEffect, useRef } from "react";
import "./Loading.css";

function Loading() {
  const divRef = useRef();
  useEffect(() => {
    divRef.current.style.width = "100vw";
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        className="fixed top-0 left-0 h-[3px] w-[1px] bg-gray-700 transition-all duration-700 line_loading z-[100]"
      ></div>
    </div>
  );
}
export default Loading;
