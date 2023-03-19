import ProfileEachPost from "./ProfileEachPost";
import NoPicTag from "../../../assert/images/no-pic-tag.png";
import { useDispatch } from "react-redux";
import usePost from "../../../customHooks/usePost";
import { getPostByUserId } from "../../../redux/features/post/postSlice";
import { useEffect } from "react";

function ProfilePost({ currentTab }) {
  const dispatch = useDispatch();
  let { postByUserID, isLoading } = usePost();

  useEffect(() => {
    const promise = dispatch(getPostByUserId());
    return () => promise.abort();
  }, [dispatch]);

  const handlePost = () => {
    if (currentTab !== "post") {
      postByUserID = postByUserID.filter((ele) => ele.type === currentTab);
    }
    return postByUserID;
  };

  return (
    <div className="flex flex-wrap -px-1 lg:-mx-3.5">
      {isLoading && <>is loading....</>}

      {handlePost().length ? (
        handlePost().map((ele, index) => (
          <ProfileEachPost type={ele.type} data={ele} src={ele.images[0]} key={index} />
        ))
      ) : (
        <div className="w-full h-[300px] flex items-center">
          <div className="w-[350px] m-auto flex flex-col items-center">
            <div className="mb-4">
              <img
                src={NoPicTag}
                className="h-[72px] w-[72px]"
                alt="no-tag-pic"
              />
            </div>
            <div className="mb-6 text-[28px] font-light">Ảnh có mặt bạn</div>
            <div className="text-center text-sm ">
              {/* Khi mọi người gắn thẻ bạn trong ảnh, ảnh sẽ xuất hiện tại đây. */}
              Chưa có bài nào cả
            </div>
          </div>
        </div>
      )}

      {/* if there is nothing to show  */}
    </div>
  );
}

export default ProfilePost;
