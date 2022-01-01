import LoginImage from "../../assert/images/login.png";
import Login1 from "../../assert/images/login1.jpg";
import Login2 from "../../assert/images/login2.jpg";
import Login3 from "../../assert/images/login3.jpg";
import Login4 from "../../assert/images/login4.jpg";
import Login5 from "../../assert/images/login5.jpg";


function LeftSectionLogin() {
  return (
    <div className="hidden lg:block">
      <div className="relative">
        <img src={LoginImage} alt="login-pic" />

        <img
          src={Login1}
          className="transition-all absolute slide-image_Login h-[429px] top-[16%] right-[62px] z-10 w-[242px]"
          alt=""
        />
        <img
          src={Login2}
          className="transition-all absolute slide-image_Login h-[429px] top-[16%] right-[62px] z-10 w-[242px]"
          alt=""
        />
        <img
          src={Login3}
          className="transition-all absolute slide-image_Login h-[429px] top-[16%] right-[62px] z-10 w-[242px]"
          alt=""
        />
        <img
          src={Login4}
          className="transition-all absolute slide-image_Login h-[429px] top-[16%] right-[62px] z-10 w-[242px]"
          alt=""
        />
        <img
          src={Login5}
          className="transition-all absolute slide-image_Login h-[429px] top-[16%] right-[62px] z-10 w-[242px]"
          alt=""
        />
      </div>
    </div>
  );
}

export default LeftSectionLogin;
