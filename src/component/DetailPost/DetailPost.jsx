import OverlayMenuPost from "./OverlayMenuPost/OverlayMenuPost";
import OtherPost from "./OtherPost/OtherPost";
import PostMobile from "./Version/Mobile/PostMobile";
import PostPcTablet from "./Version/PcTablet/PostPcTablet";
import { useState } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import useDetailPost from "../../customHooks/useDetailPost";
import { Instagram } from "react-content-loader";
import { eachPostInit } from "../../redux/features/detailPost/detailPost";
function DetailPost() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { idPost } = useParams();
  const { isLoading, post } = useDetailPost(idPost);

  useEffect(() => {
    const promise = dispatch(eachPostInit(idPost));
    // Canceling While Running​
    // when the internet's so fucking slow, you wanna go to detail post page, dispatch => detailPost Init
    // for some reason u go to home page, the detailPost.rejected will be executed
    // for saving resources
    return () => {
      promise.abort();
    };
  }, [dispatch, idPost]);

  const handleClickMenu = () => {
    setShowModal((pre) => !pre);
  };
  return (
    <>
      <Header />

      {isLoading ? <Instagram /> : ""}

      {post._id && (
        <div className="pt-header_height md:pt-[86px] w-[100%] lg:w-full max-w-[975px] mx-auto my-0 p-0 ">
          <PostPcTablet onCLickClose={handleClickMenu} post={post} />
          <PostMobile onCLickClose={handleClickMenu} post={post} />

          <div className="my-12 w-full border border-solid border-[#ccc]" />

          <>
            <div className="mb-5">
              Thêm các bài viết của
              <a href="/" className="font-semibold text-sm">
                {" "}
                {post.userId.username}
              </a>
            </div>
            <OtherPost />
          </>

          {showModal && <OverlayMenuPost onCLickClose={handleClickMenu} />}
        </div>
      )}
    </>
  );
}

export default DetailPost;
