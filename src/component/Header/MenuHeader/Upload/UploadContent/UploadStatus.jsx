import AllowCommentButton from "./AllowCommentButton";

function UploadStatus({ onClickNextStep }) {
  return (
    <div className="flex justify-center mt-5">
      <div className="text-sm w-[80%]">
        <div className="flex mb-3 items-center">
          <div
            style={{
              backgroundImage: `url(https://tockhoedep365.com/wp-content/uploads/2018/04/cac-kieu-toc-dep-nhat-cua-ricardo-kaka.jpg)`,
            }}
            className="bg-cover bg-center bg-no-repeat w-8 h-8 rounded-full mr-3"
          ></div>
          <p className="font-semibold">phikhanhcr</p>
        </div>
        <div className="mb-3 text-base">
          <textarea
            type="text"
            placeholder="Viết chú thích"
            className="outline-none w-[80%] h-auto resize-none max-h-{168px] md:min-h-[168px]"
          />
        </div>
        <AllowCommentButton />
        <div className="flex mt-3">
          <div 
            onClick={onClickNextStep}
            className="mr-3 cursor-pointer mt-3 border border-solid border-transparent bg-[#0095f6] text-white rounded text-center text-sm appearance-none py-[5px] px-[9px]">
            {"<"} Trở lại
          </div>
          <div className="cursor-pointer mt-3 border border-solid border-transparent bg-[#0095f6] text-white rounded text-center text-sm appearance-none py-[5px] px-[9px]">
            Chia sẻ
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadStatus;
