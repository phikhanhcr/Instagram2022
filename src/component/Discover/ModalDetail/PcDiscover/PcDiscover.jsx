import { useState } from "react";

function PcDiscover({ data }) {
  const urls = data.url;
  const [currentIndex, setCurrentIndex] = useState(0);

  function getNewSlideIndex(step) {
    let newSlideIndex = currentIndex + step;
    if (newSlideIndex >= urls.length) newSlideIndex = urls.length - 1;
    else if (newSlideIndex < 0) newSlideIndex = 0;
    setCurrentIndex(newSlideIndex);
  }
  return (
    <div
      className="
      hidden
      md:flex 
      box-border
      w-full 
      sm:h-[40%]
      md:h-[60%]
      md:w-[90%]
      lg:h-[92%]
      lg:w-[90%]
      justify-center 
      items-center 
      relative
      "
    >
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
      <div className="w-[450px] md:min-w-[106px] lg:min-w-[206px] h-[100%] overflow-hidden scrollbar-hide  overflow-y-scroll bg-white rounded-r-md flex-col flex">
        <div className=" header  flex items-center justify-between py-2 px-4 lg:p-4 border border-solid border-[#ccc]">
          <div
            className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mr-[14px] "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80)",
            }}
          ></div>
          <div className="flex-1">
            <div className="flex text-sm items-center">
              <a href="/" className="font-medium mr-1 hover:underline">
                phikhanhcr
              </a>
              <span className="text-[#0095f6]">• Theo dõi</span>
            </div>
            <div className="cursor-pointer text-xs leading-4">
              ducphong271103 • Âm thanh gốc
            </div>
          </div>
          <div className="cursor-pointer">
            <svg
              aria-label="Tùy chọn khác"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={24}
              role="img"
              viewBox="0 0 24 24"
              width={24}
            >
              <circle cx={12} cy={12} r="1.5" />
              <circle cx="6.5" cy={12} r="1.5" />
              <circle cx="17.5" cy={12} r="1.5" />
            </svg>
          </div>
        </div>
        <div className="main py-2 px-4 lg:p-4 min-h-[67%] h-[67%]  scrollbar-hide overflow-y-scroll">
          <div className="post flex text-sm">
            <div
              className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mr-[14px] mt-1"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80)",
              }}
            ></div>
            <div className="flex-1">
              <a href="/" className="font-medium mr-1 hover:underline">
                phikhanhcr
              </a>
              Which realistic artwork is your favourite ? <br />
              <br />
              Artwork by{" "}
              <a href="/" className="text-[#00376b]">
                @darky.artist
              </a>{" "}
              <br /> <br />
              Follow 👉{" "}
              <a href="/" className="text-[#00376b]">
                @thevisualcrowd⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣
              </a>
              for more!!! <br />
              Follow 👉{" "}
              <a href="/" className="text-[#00376b]">
                @thevisualcrowd⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣
              </a>
              for more!!! <br /> <br />
              🔔Remember to turn on post notifications so you can see our latest
              post!!!⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣
              <br />
              ⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣
              <div className="dicover__post_hastag text-[#00376b]">
                #nerdculture #DisneyStudios #Art
              </div>
              <div className="mt-2 opacity-70 text-[12px]">3 ngày</div>
              <br />
            </div>
          </div>
          <div className="comment">
            <ul className="h-auto">
              {/* list comment */}
              <li className="mb-4">
                <div className="flex text-sm items-center">
                  <div
                    className="self-start w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mt-1 mr-[14px]"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80)",
                    }}
                  ></div>
                  <div className="main flex-1">
                    <a href="/" className="font-medium mr-1 hover:underline">
                      phikhanhcr
                    </a>
                    <span>
                      Which realistic artwork is your favourite rtwork is your
                      favourit rtwork is your favourit artwork is your
                      favourite?{" "}
                    </span>
                  </div>
                  <div className>
                    <svg
                      aria-label="Thích"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height={12}
                      role="img"
                      viewBox="0 0 48 48"
                      width={12}
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="relative text-[10px] opacity-70 pl-10">
                  <div className="flex mt-2 items-center">
                    <span className="cursor-pointer mr-2">5 ngày</span>
                    <span className="cursor-pointer mr-2">19 lượt thích</span>
                    <span className="cursor-pointer mr-2">Trả lời</span>
                    <div>
                      <svg
                        aria-label="Tùy chọn bình luận"
                        className="_8-yf5 "
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height={24}
                        role="img"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <circle cx={12} cy={12} r="1.5" />
                        <circle cx="6.5" cy={12} r="1.5" />
                        <circle cx="17.5" cy={12} r="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <br />
                    <button className type="button">
                      <div className="align-middle border-b-[1px] border-solid inline-block w-6 h-0 mr-4 border-[#7a7a7a]"></div>
                      <span className>Xem câu trả lời (2)</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex text-sm items-center">
                  <div
                    className="w-7 h-7 p-2 rounded-full self-start bg-cover bg-no-repeat bg-center mt-1 mr-[14px]"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80)",
                    }}
                  ></div>
                  <div className="main flex-1">
                    <a href="/" className="font-medium mr-1 hover:underline">
                      phikhanhcr
                    </a>
                    <span>
                      Which realistic artwork is your favourite rtwork is your
                      favourit rtwork is your favourit artwork is your
                      favourite?{" "}
                    </span>
                  </div>
                  <div>
                    <svg
                      aria-label="Thích"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height={12}
                      role="img"
                      viewBox="0 0 48 48"
                      width={12}
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="relative text-[10px] pl-10">
                  <div className="flex mt-2 items-center">
                    <span className="cursor-pointer opacity-70 mr-2">
                      5 ngày
                    </span>
                    <span className="cursor-pointer opacity-70 mr-2">
                      19 lượt thích
                    </span>
                    <span className="cursor-pointer opacity-70 mr-2">
                      Trả lời
                    </span>
                    <div>
                      <svg
                        aria-label="Tùy chọn bình luận"
                        className="_8-yf5 "
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height={24}
                        role="img"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <circle cx={12} cy={12} r="1.5" />
                        <circle cx="6.5" cy={12} r="1.5" />
                        <circle cx="17.5" cy={12} r="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <br />
                    <button className type="button">
                      <div className="align-middle border-b-[1px] border-solid inline-block w-6 h-0 mr-4 border-[#7a7a7a]"></div>
                      <span className="opacity-70">Ẩn câu trả lời (2)</span>
                    </button>
                    <div className="flex text-sm mt-4">
                      <div
                        className="w-7 h-7 p-2 rounded-full bg-cover bg-no-repeat bg-center mt-1 mr-[14px]"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80)",
                        }}
                      ></div>
                      <div className="main flex-1">
                        <a
                          href="/"
                          className="font-medium mr-1 hover:underline"
                        >
                          phikhanhcr
                        </a>
                        <span>
                          Which realistic artwork is your favourite rtwork is
                          your favourit rtwork is your favourit artwork is your
                          favourite?{" "}
                        </span>
                      </div>
                      <div>
                        <svg
                          aria-label="Thích"
                          className="_8-yf5 "
                          color="#262626"
                          fill="#262626"
                          height={12}
                          role="img"
                          viewBox="0 0 48 48"
                          width={12}
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex mt-2 items-center pl-10">
                      <span className="cursor-pointer opacity-70 mr-2">
                        5 ngày
                      </span>
                      <span className="cursor-pointer opacity-70 mr-2">
                        19 lượt thích
                      </span>
                      <span className="cursor-pointer opacity-70 mr-2">
                        Trả lời
                      </span>
                      <div>
                        <svg
                          aria-label="Tùy chọn bình luận"
                          className="_8-yf5 "
                          color="#8e8e8e"
                          fill="#8e8e8e"
                          height={24}
                          role="img"
                          viewBox="0 0 24 24"
                          width={24}
                        >
                          <circle cx={12} cy={12} r="1.5" />
                          <circle cx="6.5" cy={12} r="1.5" />
                          <circle cx="17.5" cy={12} r="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* like icon */}
        <div className="react flex justify-between px-4 lg:py-2 lg:px-4 pt-1 border-t border-[#d1d1d1] border-solid">
          <div className="flex">
            <div className="py-2 pr-2 cursor-pointer">
              <svg
                aria-label="Thích"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height={24}
                role="img"
                viewBox="0 0 48 48"
                width={24}
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </div>
            <div className="p-2 cursor-pointer">
              <svg
                aria-label="Bình luận"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height={24}
                role="img"
                viewBox="0 0 48 48"
                width={24}
              >
                <path
                  clipRule="evenodd"
                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="p-2 cursor-pointer">
              <svg
                aria-label="Chia sẻ bài viết"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height={24}
                role="img"
                viewBox="0 0 48 48"
                width={24}
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </div>
          </div>
          <div className="py-2 pl-1 cursor-pointer">
            <svg
              aria-label="Lưu"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={24}
              role="img"
              viewBox="0 0 48 48"
              width={24}
            >
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
            </svg>
          </div>
        </div>
        {/* like  */}
        <div className="px-4 py-1">
          <a href="/" className="font-semibold text-sm block">
            7,700 lượt thích
          </a>
          <span className="text-xs opacity-60">3 ngày trước</span>
        </div>
        {/* add comment */}
        <div className="input flex items-center flex-1 px-4 py-2 text-sm border-t border-solid border-[#e9e9e9]">
          <div>
            <svg
              aria-label="Biểu tượng cảm xúc"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height={24}
              role="img"
              viewBox="0 0 48 48"
              width={24}
            >
              <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
              <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
            </svg>
          </div>
          <div className="flex-1 w-full">
            <input
              type="text"
              className="w-full outline-none border-none pl-3"
              placeholder="Thêm bình luận..."
            />
          </div>
          <div>
            <button className="text-[#0095f6] ">Đăng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PcDiscover;
