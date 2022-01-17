import { useState } from "react";


function PostImages({ onDbCLick, images }) {
  // const [images, setImages ] = useState([]);

  const [slideIndex, setSlideIndex] = useState(0);
  const numberSlide = images.length;

  function getNewSlideIndex(step) {
    let newSlideIndex = slideIndex + step;
    if (newSlideIndex >= numberSlide) newSlideIndex = numberSlide - 1;
    else if (newSlideIndex < 0) newSlideIndex = 0;
    setSlideIndex(newSlideIndex);
  }

  return (
    <div className="wrapper-img__post relative">
      <div className="wrapper-img__post-section relative max-w-full w-full m-auto overflow-hidden">
        {images.map((ele, index) => (
          <div
            className={` ${slideIndex === index ? "fade" : "hidden fade"}`}
            key={index}
            onDoubleClick={onDbCLick}
            
          >
            <div className="text-[#f2f2f2] text-xs py-2 px-3 absolute top-0">
              {slideIndex + 1} / {numberSlide}
            </div>
            <img
              src={ele}
              className="post-section__image w-full h-auto"
              alt="images"
            />
          </div>
        ))}
        <span
          onClick={() => getNewSlideIndex(-1)}
          className="left-1 cursor-pointer absolute top-[50%] w-[25px] h-[25px] mt-[-22px] text-black font-bold text-sm select-none bg-white bg-opacity-70 rounded-full flex justify-center items-center opacity-50 prev"
        >
          ❮
        </span>
        <span
          onClick={() => getNewSlideIndex(1)}
          className="right-1 cursor-pointer absolute top-[50%] w-[25px] h-[25px] mt-[-22px] text-black font-bold text-sm select-none bg-white bg-opacity-70 rounded-full flex justify-center items-center opacity-50 next"
        >
          ❯
        </span>
      </div>
      <div
        className="wrapper-dot mt-1 flex justify-center"
        style={{ textAlign: "center" }}
      >
        {images.map((ele, index) => (
          <span
            key={index}
            // className="dot cursor-pointer h-[5px] w-[5px] my-0 mx-0.5 bg-[#bbb] inline-block transition-all duration-500"
            className={
              slideIndex === index
                ? "dot cursor-pointer rounded-full h-[5px] w-[5px] my-0 mx-0.5 bg-[#0095f6] inline-block transition-all duration-500"
                : "dot cursor-pointer rounded-full h-[5px] w-[5px] my-0 mx-0.5 bg-[#bbb] inline-block transition-all duration-500"
            }
          />
        ))}
      </div>
      <div className="layer-img_like-post animate-likePostShowHeart absolute text-[100px] text-white top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
        <i className="fas fa-heart" />
      </div>
    </div>
  );
}

export default PostImages;
