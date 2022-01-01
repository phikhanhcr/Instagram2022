import ForgotImages from '../../assert/images/forgot_password.png'
function ForgotPassword() {
  return (
    <>
      <section>
        <div className="w-[100%] lg:w-full max-w-[975px] mx-auto p-">
          <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[90%] md:w-[388px] bg-[#fff]  border border-solid border-[#ccc]">
              <div className="w-[298px] flex flex-col items-center mx-auto">
                <img src={ForgotImages} className="pt-6" alt=""/>
                <p className="font-semibold mb-4">Bạn gặp sự cố khi đăng nhập?</p>
                <span className="text-center text-xs mb-4 opacity-70">Nhập email, số điện thoại hoặc tên người dùng của bạn và chúng tôi sẽ gửi cho bạn một liên kết để truy
                  cập lại vào tài khoản.</span>
                <div className="flex flex-col items-center pb-7 w-full">
                  <input type="text" className="text-sm text-gray-800 mb-5 bg-[#eee] w-full py-1 outline-none border border-solid border-[#ccc] pl-3" />
                  <button className="text-white bg-[#0095f6] w-full py-1 rounded">Gửi liên kết đăng nhập</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
