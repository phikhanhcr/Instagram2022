import { memo, useState } from "react";

function ImagesSlidePcDiscover({ urls }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getNewSlideIndex = (step) => {
    let newSlideIndex = currentIndex + step;
    if (newSlideIndex >= urls.length) newSlideIndex = urls.length - 1;
    else if (newSlideIndex < 0) newSlideIndex = 0;
    setCurrentIndex(newSlideIndex);
  };
  return (
    <div className="h-full">
      <div className="h-full relative overflow-hidden max-w-[1000px]">
        {urls.map((ele, index) => (
          <div
            className={
              index === currentIndex
                ? "mySlides-post_image h-full relative block"
                : "mySlides-post_image h-full relative hidden"
            }
            key={index}
          >
            <div className="top-1 left-2 opacity-[0.7] absolute text-white">
              {index + 1} / {urls.length}
            </div>
            <img
              src={ele}
              className="post-section__image h-full w-auto  rounded-l-md"
              alt=""
            />
          </div>
        ))}

        {urls.length > 1 && (
          <>
            <p
              onClick={() => getNewSlideIndex(-1)}
              className="text-black cursor-pointer absolute top-[50%] left-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]"
            >
              ❮
            </p>
            <p
              onClick={() => getNewSlideIndex(1)}
              className="text-black cursor-pointer absolute top-[50%] right-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]"
            >
              ❯
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default memo(ImagesSlidePcDiscover);
