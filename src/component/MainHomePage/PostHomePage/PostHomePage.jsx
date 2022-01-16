import { useEffect } from "react";
import usePost from "../../../customHooks/usePost";
import EachPostHomePage from "./EachPost/EachPost";
import LoadingPost from "./LoadingPost";

function PostHomePage() {
  const { post, initializeNewFeedPost, isLoading, status } = usePost();

  useEffect(() => {
    initializeNewFeedPost();
  }, [initializeNewFeedPost]);

  return (
    <ul className="post_section-list">
      {/* <LoadingPost /> */}

      {post.length && post.map((ele) => <EachPostHomePage post={ele} key={ele._id}/>)}
    </ul>
  );
}

export default PostHomePage;
