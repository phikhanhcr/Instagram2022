function ChangePassword() {
  return (
    <div className="w-full">
      <div className="flex mt-8">
        <div className="md:w-[194px] relative">
          <div
            style={{
              backgroundImage:
                "url(https://image.thanhnien.vn/w1024/Uploaded/2021/ycwkdqmb/2021_05_31/tanh/mount-gettyimages_nhdl.jpg)",
            }}
            className="w-[38px] md:absolute md:right-0 h-[38px] bg-cover bg-center bg-no-repeat rounded-full mr-5 md:mr-8"
          ></div>
        </div>
        <div className="text-2xl font-normal">phikhanhcris</div>
      </div>
      <div className="mt-8 mb-4">
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right  font-semibold text-sm"
            htmlFor="old-pasword"
          >
            {" "}
            Mật khẩu cũ
          </label>
          <input
            id="old-pasword"
            className="w-[80%] md:w-[500px] rounded  border border-solid border-[#ccc] outline-none px-3 py-1 bg-[#eee]"
            type="text"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor="new-password"
          >
            {" "}
            Mật khẩu mới
          </label>
          <input
            id="new-pasword"
            className="w-[80%] md:w-[500px] rounded border border-solid border-[#ccc] outline-none px-3 py-1 bg-[#eee]"
            type="text"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor="renew-pasword"
          >
            {" "}
            Xác nhận mật khẩu mới
          </label>
          <input
            id="renew-pasword"
            className="w-[80%] md:w-[500px] rounded border border-solid border-[#ccc] outline-none px-3 py-1 bg-[#eee]"
            type="text"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row">
          <div
            className="w-[194px] md:text-right font-semibold text-base "
            htmlFor="renew-pasword"
          />
          <button className="w-[124px] mt-2 text-white px-[9px] py-[6px] bg-[#0095f6] align-middle  rounded font-semibold text-xs">
            Đổi mật khẩu
          </button>
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row">
          <div
            className="w-[194px] md:text-right font-semibold text-base "
            htmlFor="renew-pasword"
          />
          <a
            href="/"
            className=" cursor-pointer text-[#0095f6] align-middle  rounded font-semibold text-xs"
          >
            Quên mật khẩu?
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
