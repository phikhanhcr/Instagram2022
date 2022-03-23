import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import usePost from "../../../customHooks/usePost";
import { getPostByUserId } from "../../../redux/features/post/postSlice";
import EachOtherPost from "./EachOtherPost";

function OtherPost({ userId }) {
  const dispatch = useDispatch();
  const { postByUserID, isLoading } = usePost();
  console.log({ postByUserID });
  useEffect(() => {
    const promise = dispatch(getPostByUserId(userId));
    return () => promise.abort();
  }, [dispatch, userId]);
  return (
    <div className="flex flex-wrap -px-1 lg:-mx-3.5">
      {isLoading && <>Loading....</>}
      {postByUserID.length ? (
        postByUserID.map((ele, index) => (
          <EachOtherPost data={ele} key={index} />
        ))
      ) : (
        <>Chưa có bài nào khác</>
      )}
    </div>
  );
}

export default OtherPost;
