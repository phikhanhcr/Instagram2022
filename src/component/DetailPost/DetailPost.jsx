import OverlayMenuPost from "./OverlayMenuPost/OverlayMenuPost";
import OtherPost from "./OtherPost/OtherPost";
import PostMobile from "./Version/Mobile/PostMobile";
import PostPcTablet from "./Version/PcTablet/PostPcTablet";
import { useState } from "react";
import Header from "../Header/Header";

function DetailPost() {
  const [showModal, setShowModal] = useState(false);
  const handleClickMenu = () => {
    setShowModal((pre) => !pre);
  };
  return (
    <>
      <Header />
      <div className="pt-header_height md:pt-[86px] w-[100%] lg:w-full max-w-[975px] mx-auto my-0 p-0 ">
        <PostPcTablet onCLickClose={handleClickMenu} />
        <PostMobile onCLickClose={handleClickMenu} />

        <div className="my-12 w-full border border-solid border-[#ccc]" />
        <div className="mb-5">
          Thêm các bài viết của
          <a href="/" className="font-semibold text-sm">
            phikhanhcr
          </a>
        </div>
        <OtherPost />

        {showModal && <OverlayMenuPost onCLickClose={handleClickMenu} />}
      </div>
    </>
  );
}

export default DetailPost;
