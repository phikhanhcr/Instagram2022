import AndroidDownload from "../../assert/images/downloadPlay.png";
import IosDownload from "../../assert/images/downloadApp.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../redux/features/user/userSlice";
function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    dispatch(
      userRegister({
        email,
        username,
        password,
      })
    );

    navigate("/login");
  }
  return (
    <div className="h-screen  w-screen bg-[rgb(225, 225, 225)]">
      <div className="h-full w-full">
        <section className="login md:pt-header_height">
          <div className="max-w-[935px] w-[100%] mx-auto my-0 p-0 ">
            <div className="flex justify-center pt-8">
              <div className="max-w-[350px] w-[350px] mt-8">
                <div className="flex flex-col bg-white border-none md:border md:border-solid border-[#ccc] items-center pb-5">
                  <img
                    alt="Instagram"
                    className="h-[51px] w-[175px] mt-8"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  />
                  <div className="text-lg font-semibold text-center text-[#8e8e8e]">
                    Đăng ký để xem ảnh và video từ bạn bè.
                  </div>
                  <form action className="flex flex-col w-[268px] mt-6">
                    <div className=" h-[38px] mb-[6px]">
                      <input
                        type="text"
                        className="h-full w-full outline-none border border-solid border-[#ccc] text-xs p-2"
                        placeholder="Số di động hoặc email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* <div className=" h-[38px] mb-[6px]">
                      <input
                        type="text"
                        className="h-full w-full outline-none border border-solid border-[#ccc] text-xs p-2"
                        placeholder="Tên đầy đủ"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div> */}
                    <div className=" h-[38px] mb-[6px]">
                      <input
                        type="text"
                        className="h-full w-full outline-none border border-solid border-[#ccc] text-xs p-2"
                        placeholder="Tên người dùng"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className=" h-[38px] mb-[6px]">
                      <input
                        type="text"
                        className="h-full w-full outline-none border border-solid border-[#ccc] text-xs p-2"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="my-2 rounded-sm bg-[#0095f6] text-white font-semibold py-[3px] px-[9px]"
                       onClick={registerUser}
                    >
                      Đăng ký
                    </button>
                    <div className="flex mt-2 mb-3">
                      <div className="h-[1px] top-2 bg-[#dbdbdb] relative flex-1" />
                      <div className="mx-[18px] text-xs font-semibold opacity-40 uppercase">
                        Hoặc
                      </div>
                      <div className="h-[1px] top-2 bg-[#dbdbdb] relative flex-1" />
                    </div>
                    <div>
                      <button className="flex items-center text-sm justify-center w-full py-2">
                        <span
                          className="bg-center mr-2 bg-no-repeat bg-cover w-4 h-4 inline-block"
                          style={{
                            backgroundImage:
                              "url(https://banner2.cleanpng.com/20180713/huy/kisspng-computer-icons-facebook-logo-flattened-vector-5b49543a00dfc6.5299092815315323460036.jpg)",
                          }}
                        />
                        <span className="text-[#385185] font-semibold">
                          Đăng nhập bằng Facebook
                        </span>
                      </button>
                    </div>
                    <div className="text-center text-xs opacity-80 mt-3">
                      <span className="text-[#385185]">Quên mật khẩu?</span>
                    </div>
                  </form>
                </div>
                <div className="bg-white text-sm border border-solid border-[#ccc] py-4 text-center mt-3">
                  <span>Bạn đã có tài khoản rồi?</span>
                  <Link to="/login" className="text-[#0095f6] font-semibold">
                    {" "}
                    Đăng nhập
                  </Link>
                </div>
                <div className="text-sm text-center pb-7 md:pb-0">
                  <div className="my-3">Tải ứng dụng</div>
                  <div className="flex justify-center">
                    <a href className="mr-2">
                      <img
                        className="w-[136px] h-10"
                        src={AndroidDownload}
                        alt=""
                      />
                    </a>
                    <a href>
                      <img
                        className="w-[136px] h-10"
                        src={IosDownload}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs opacity-60 text-center mt-6">
            <span>Tiếng Việt © 2021 Instagram from Meta</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
