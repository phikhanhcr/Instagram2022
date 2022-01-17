import { Link } from 'react-router-dom'
import CountNumber from './CountNumber/CountNumber';
import DropDownProfile from './DropDownProfile/DropDownProfile';
import NotificationIcon from "./NotificationIcon/NotificationIcon";
import UploadIcon from "./Upload/UploadIcon";
function MenuHeader() {
  return (
    <div className="justify-between w-full md:w-auto md:justify-start flex items-center">
      <div className=" ml-[22px] cursor-pointer">
        <Link to="/" className="header__content-menu-link" id="home-menu">
          <svg
            aria-label="Trang chủ"
            className="_8-yf5 "
            color="#262626"
            fill="#262626"
            height={22}
            role="img"
            viewBox="0 0 48 48"
            width={22}
          >
            <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
          </svg>
        </Link>
      </div>
      <div className=" ml-[22px] cursor-pointer relative">
        <Link to="/direct/inbox" className="header__content-menu-link">
          <svg
            aria-label="Direct"
            className="_8-yf5"
            color="#262626"
            fill="#262626"
            height={22}
            role="img"
            viewBox="0 0 48 48"
            width={22}
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </Link>
        <CountNumber count={1}/>
      </div>
      <UploadIcon />
      <div className=" ml-[22px] cursor-pointer">
        <Link to="/explore" className="header__content-menu-link">
          <svg
            aria-label="Tìm người"
            className="_8-yf5"
            color="#262626"
            fill="#262626"
            height={22}
            role="img"
            viewBox="0 0 48 48"
            width={22}
          >
            <path
              clipRule="evenodd"
              d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <NotificationIcon />
      {/* show menu profile */}
      <DropDownProfile />
    </div>
  );
}

export default MenuHeader;
