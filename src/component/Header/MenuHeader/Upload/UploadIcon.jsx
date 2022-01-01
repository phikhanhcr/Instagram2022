import { useRef, useState, useEffect } from "react";
import "./Upload.css";
import UploadStatus from "./UploadContent/UploadStatus";

function UploadIcon() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const modalRef = useRef();
  const [uploadContentModal, setUploadContentModel] = useState(false);
  const handleChangeInputFile = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setFile(file);
  };

  const handleClickNextStep = () => {
    setUploadContentModel((pre) => !pre);
  };
  
  // cleanup function
  useEffect(() => {
    return () => file && URL.revokeObjectURL(file.preview);
  }, [file]);

  return (
    <div>
      <div
        className=" ml-[22px] cursor-pointer"
        id="post-section__header-upload"
        onClick={() => setShowModal(true)}
      >
        <svg
          aria-label="Bài viết mới"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height={22}
          role="img"
          viewBox="0 0 48 48"
          width={22}
        >
          <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path>
          <path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>
          <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"></path>
        </svg>
      </div>

      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="fixed top-0 right-0 left-0 bottom-0 z-[3] animate-showModal bg-black bg-opacity-70"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          ></div>
          <div
            className="w-[348px] h-auto min-h-[349px] md:w-[400px] md:h-[440px] lg:w-[700px] lg:h-[712px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-solid border-[#ccc] bg-white rounded-xl max-h-full z-10 bottom-0 transition-all flex-col"
            id="uploadModal"
            ref={modalRef}
          >
            <div className="upload--modal__heading text-center border-b border-solid border-[#ccc] ">
              <h1 className="font-semibold text-sm my-2">Tạo bài viết mới</h1>
            </div>

            {!file ? (
              <diw className="upload--modal__upload-content h-full flex-1 mx-auto flex flex-col items-center justify-center">
                <svg
                  aria-label="Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video"
                  className="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="77"
                  role="img"
                  viewBox="0 0 97.6 77.3"
                  width="96"
                >
                  <path
                    d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h2 className="upload--modal__upload-des font-light text-2xl mt-3">
                  Kéo ảnh và video vào đây
                </h2>
                <label
                  for="upload-photo"
                  className=" cursor-pointer mt-3 border border-solid border-transparent bg-[#0095f6] text-white rounded text-center text-sm appearance-none py-[5px] px-[9px]"
                >
                  Chọn từ máy tính
                </label>
                <input
                  onChange={handleChangeInputFile}
                  accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime"
                  className="hidden border border-solid border-transparent bg-[#0095f6] text-white rounded cursor-pointer text-center text-sm appearance-none py-[5px] px-[9px]"
                  id="upload-photo"
                  type="file"
                />
              </diw>
            ) : (
              <>
                {!uploadContentModal ? (
                  <div className="max-h-[85%] relative overflow-hidden">
                    <div className="w-full">
                      <div className="flex justify-center">
                        <img alt="img" src={file.preview} className="w-full h-auto" />
                      </div>
                      <button
                        onClick={handleClickNextStep}
                        className="absolute cursor-pointer bottom-2 right-2 border border-solid border-transparent bg-gray-400 font-semibold bg-opacity-60 rounded text-center text-sm appearance-none py-[5px] px-[9px]"
                      >
                        Tiếp
                      </button>
                    </div>
                  </div>
                ) : (
                  <UploadStatus onClickNextStep={handleClickNextStep} />
                )}
              </>
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default UploadIcon;
