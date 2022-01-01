import { Link } from 'react-router-dom'

function LogoHeader() {
  return (
    <div className="header__content-logo mt-[7px] hidden md:block">
      <Link to="/">
        <img
          alt="Instagram"
          className="s4Iyt"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </Link>
    </div>
  );
}

export default LogoHeader;
