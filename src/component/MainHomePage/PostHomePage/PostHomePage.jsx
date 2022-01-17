import { useEffect } from "react";
import usePost from "../../../customHooks/usePost";
import EachPostHomePage from "./EachPost/EachPost";
import { Instagram } from "react-content-loader";
import { useDispatch } from "react-redux";
import { postInit } from "../../../redux/features/post/postSlice";

function PostHomePage() {
  const { post, isLoading } = usePost();
  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(postInit());
    return () => promise.abort();
  }, [dispatch]);

  return (
    <ul className="post_section-list">
      {isLoading ? <Instagram /> : ""}

      {post.length &&
        post.map((ele) => <EachPostHomePage post={ele} key={ele._id} />)}
    </ul>
  );
}

export default PostHomePage;
