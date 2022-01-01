import "../../assert/css/base.css";
import "../../assert/css/style.css";
import "../../assert/tailwind/build/styleTailwind.css"
import LogoHeader from "./LogoHeader/Logo";
import InputSearchHeader from "./InputSearchHeader";
import MenuHeader from "./MenuHeader";
import { memo } from "react";

function Header() {
  return (
    <section className="header px-5 lg:px-0 h-header_height w-full bg-white border-b border-solid border-[#ccc] fixed top-0 left-0 right-0 z-[1] f;ex justify-between items-center">
      <div className="w-full h-full block p-0 max-w-[975px] my-0 mx-auto wide">
        <div className="header__content w-full h-full flex justify-between items-center">
          <LogoHeader />

          <InputSearchHeader />

          <MenuHeader />
        </div>
      </div>
    </section>
  );
}

export default memo(Header);
