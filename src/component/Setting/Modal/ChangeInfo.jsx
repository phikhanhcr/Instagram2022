function ChangeInfo() {
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
            Tên
          </label>
          <input
            id="old-pasword"
            className="w-[80%] md:w-[500px] rounded  border border-solid border-[#ccc] outline-none px-3"
            type="text"
            defaultValue="Phi Khanh Cr"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row min-h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right  font-semibold text-sm"
            htmlFor="old-pasword"
          />
          <div className="w-[80%] md:w-[500px] text-xs text-[#7a7a7a]">
            <div className="w-[90%]">
              <span>
                Hãy lấy tên mà bạn thường dùng để tài khoản của bạn dễ tìm thấy
                hơn. Đó có thể là tên đầy đủ, biệt danh hoặc tên doanh nghiệp.
              </span>
              <span className="block mt-2">
                Bạn chỉ có thể đổi tên mình 2 lần trong vòng 14 ngày.
              </span>
            </div>
          </div>
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right  font-semibold text-sm"
            htmlFor="old-pasword"
          >
            Tên người dùng
          </label>
          <input
            id="old-pasword"
            className="w-[80%] md:w-[500px] rounded  border border-solid border-[#ccc] outline-none px-3"
            type="text"
            defaultValue="phikhanhcris"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row min-h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right  font-semibold text-sm"
            htmlFor="old-pasword"
          />
          <div className="w-[80%] md:w-[500px] text-xs text-[#7a7a7a]">
            <div className="w-[90%]">
              <span className>
                Thông thường, bạn sẽ có thể đổi lại tên người dùng về
                phikhanhcris sau 14 ngày nữa.
              </span>
              <span className="text-[#0095f6]">Tìm hiểu thêm.</span>
            </div>
          </div>
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor="new-password"
          >
            Trang web
          </label>
          <input
            id="new-pasword"
            className="w-[80%] md:w-[500px] rounded border border-solid border-[#ccc] outline-none px-3 py-1"
            type="text"
            placeholder="Trang web"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor="renew-pasword"
          >
            Tiểu sử{" "}
          </label>
          <input
            id="renew-pasword"
            className="w-[80%] md:w-[500px] rounded border border-solid border-[#ccc] outline-none px-3 py-1"
            type="text"
            defaultValue="Kaká"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row min-h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right  font-semibold text-sm"
            htmlFor="old-pasword"
          />
          <div className="w-[80%] md:w-[500px] text-xs text-[#7a7a7a]">
            <div className="w-[90%]">
              <span className="block text-sm font-medium">
                Thông tin cá nhân
              </span>
              <span className>
                Cung cấp thông tin cá nhân của bạn, bất kể bạn dùng tài khoản
                cho doanh nghiệp, thú cưng hay gì khác. Thông tin này sẽ không
                hiển thị trên trang cá nhân công khai của bạn.
              </span>
            </div>
          </div>
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor="renew-pasword"
          >
            Email
          </label>
          <input
            id="renew-pasword"
            className="w-[80%] md:w-[500px] rounded border border-solid border-[#ccc] outline-none px-3 py-1"
            type="text"
            defaultValue="sykhanhsky@gmail.com"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor="renew-pasword"
          >
            Số điện thoại
          </label>
          <input
            id="renew-pasword"
            className="w-[80%] md:w-[500px] rounded border border-solid border-[#ccc] outline-none px-3 py-1"
            type="text"
            defaultValue="+94 982 247 815"
          />
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor="sex"
          >
            Giới tính
          </label>
          <select
            name="sex"
            id="sex"
            className="w-[80%] md:w-[500px] rounded border border-solid border-[#ccc] outline-none px-3 py-1"
          >
            <option value="male">Name</option>
            <option value="female">Nữ</option>
            <option value="unknown">Không xác định</option>
            <option value="hide">Không muốn tiết lộ</option>
          </select>
        </div>
        <div className="mb-7 md:mb-4 flex flex-col  md:flex-row  h-10">
          <label
            className="md:self-center w-[194px] mb-1 md:mb-0 md:px-8 md:text-right font-semibold text-sm"
            htmlFor
          >
            Gợi ý tài khoản tương tự
          </label>
          <div className="flex flex-row-reverse items-center font-medium text-xs w-[80%] md:w-[500px] px-3 py-1">
            <label htmlFor="check-account-relevant">
              Bao gồm tài khoản của bạn khi đề xuất tài khoản tương tự mà mọi
              người có thể muốn theo dõi.
            </label>
            <input
              type="checkbox"
              defaultChecked
              id="check-account-relevant"
              className="mr-3"
            />
          </div>
        </div>
        <div className="mt-[80px] md:mt-10 md:mb-4 flex flex-col  md:flex-row">
          <div className="w-[194px] md:text-right font-semibold text-base" />
          <div className="flex items-center justify-between md:w-[60%]">
            <button className="w-[124px]  text-white px-[9px] py-[6px] bg-[#0095f6] align-middle rounded font-semibold text-xs">
              Gửi
            </button>
            <button className=" cursor-pointer text-[#0095f6] align-middle  rounded font-semibold text-xs">
              Tạm thời vô hiệu hóa tài khoản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChangeInfo;
