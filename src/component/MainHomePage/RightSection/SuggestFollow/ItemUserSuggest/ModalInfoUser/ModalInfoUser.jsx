function ModalInfoUser() {
  return (
    <div
      className="
      group-hover:block 
      hidden
      bg-white
      rounded-xl
      z-[3]
      right-[-265px]
      overflow-hidden
      info-name-modal 
      p-0 
      absolute 
      h-[390px] 
      w-[390px]
      max-h-[390px]
      shadow-xl
    "
    >
      <div className="p-4 flex border-b border-solid border-[#ccc]">
        <div className="info-name-modal-header--avatar">
          <div
            className="h-[56px] w-[56px] rounded-full bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url(https://cdn.bongdaplus.vn/Assets/Media/2021/05/18/77/Mason-Mount-xuat-sac-nhat-chelsea.jpg)",
            }}
          ></div>
        </div>
        <div className="info-name-modal-header--info flex justify-between flex-col ml-4 text-sm">
          <p className="font-semibold">
            masonmount
            <span className="bg-[#0095f6] rounded-full h-4 w-4 inline-flex justify-center items-center ml-2.5">
              <i className="fas fa-check text-white text-[8px]" />
            </span>
          </p>
          <p className="text-base max-w-[200px]">Mason__Mount__</p>
          <p>
            Có
            <span className="font-semibold hover:underline max-w-full">
              thanhbinguyen__
            </span>{" "}
            và
            <span className="font-semibold hover:underline max-w-full">
              ltmu_2711
            </span>{" "}
            theo dõi
          </p>
        </div>
      </div>
      <div className="h-[52px] max-h-[52px] my-4 text-sm text-center">
        <div className="flex flex-wrap ">
          <div className="w-4/12 text-xs  ">
            <span className="font-semibold text-sm block">4,402</span> bài viết
          </div>
          <div className="w-4/12 text-xs">
            <span className="font-semibold text-sm block">16.4m</span>
            người theo dõi
          </div>
          <div className="w-4/12 text-xs">
            Đang theo dõi <span className="font-semibold text-sm">77</span>
            người dùng
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="w-4/12">
            <div
              className="w-full h-[120px] bg-center bg-no-repeat bg-cover flex transition-all duration-500 ease-in-out"
              style={{
                backgroundImage:
                  "url(https://cdn.bongdaplus.vn/Assets/Media/2021/05/18/77/Mason-Mount-xuat-sac-nhat-chelsea.jpg)",
              }}
            ></div>
          </div>
          <div className="w-4/12">
            <div
              className="w-full h-[120px] bg-center bg-no-repeat bg-cover flex transition-all duration-500 ease-in-out"
              style={{
                backgroundImage:
                  "url(https://znews-photo.zadn.vn/w660/Uploaded/khunsio/2021_05_31/gettyimages_1320705594_2048x2048.jpg)",
              }}
            ></div>
          </div>
          <div className="w-4/12">
            <div
              className="w-full h-[120px] bg-center bg-no-repeat bg-cover flex transition-all duration-500 ease-in-out"
              style={{
                backgroundImage:
                  "url(https://i-ione.vnecdn.net/2021/07/04/Mason-ione-9-5341-1625403139.jpg)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="info-name-modal-btn mx-auto flex mt-5">
        <button className="bg-[#0095f6] text-white mx-auto w-[90%] rounded-[4px]">
          Theo dõi
        </button>
      </div>
    </div>
  );
}

export default ModalInfoUser;
