import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../assert/icon/lottie/38760-instagram-logo-effect.json"
function LoadingPost(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-10 h-10">
      <Lottie options={defaultOptions} height={20} width={20} isStopped={false} isPaused={false}/>
    </div>
  );
}

export default LoadingPost;
