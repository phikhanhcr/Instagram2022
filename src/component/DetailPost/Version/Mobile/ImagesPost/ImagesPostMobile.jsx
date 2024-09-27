import { useState } from "react";

function ImagesPostMobile({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const numberSlide = images.length;

  function getNewSlideIndex(step) {
    let newSlideIndex = slideIndex + step;
    if (newSlideIndex >= numberSlide) newSlideIndex = numberSlide - 1;
    else if (newSlideIndex < 0) newSlideIndex = 0;
    setSlideIndex(newSlideIndex);
  }

  return (
    <div className="h-full relative overflow-hidden max-w-[1000px]">
      {images.length &&
        images.map((ele, index) => (
          <div
            className={` ${
              slideIndex === index
                ? "relative block h-full"
                : "hidden relative h-full"
            }`}
            key={index}
          >
            {images.length > 1 ? (
              <div className="top-1 left-2 opacity-[0.7] absolute text-white">
                {index + 1} / {images.length}
              </div>
            ) : (
              ""
            )}
            <img
              src={ele}
              className="post-section__image h-full w-auto"
              alt=""
            />
          </div>
        ))}
      {images.length > 1 ? (
        <>
          <p onClick={() => getNewSlideIndex(-1)} className="text-black cursor-pointer absolute top-[50%] left-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]">
            ❮
          </p>
          <p onClick={() => getNewSlideIndex(1)} className="text-black cursor-pointer absolute top-[50%] right-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]">
            ❯
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ImagesPostMobile;
