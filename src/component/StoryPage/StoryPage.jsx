import LogoIns from "../../assert/images/logo.png";
import ListStoryPage from "./ListStory/ListStoryPage";
import { Link } from 'react-router-dom'
import "./style/StoryPage.css";

function StoryPage() {
  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 bg-[#1a1a1a] flex items-center z-10"
      id="story-section__view"
    >
      <div className="hidden md:flex absolute top-0 right-0 left-0 h-[100px] items-center justify-between">
        <div className="m-4">
          <Link to="/">
            <img alt="Instagram" src={LogoIns} />
          </Link>
        </div>
        <div className="m-4 text-white story-section__view--close-btn cursor-pointer">
          <Link to="/">
            <svg
              aria-label="Đóng"
              className="_8-yf5 "
              color="#ffffff"
              fill="#ffffff"
              height={24}
              role="img"
              viewBox="0 0 48 48"
              width={24}
            >
              <path
                clipRule="evenodd"
                d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
                fillRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      <ListStoryPage />
    </div>
  );
}

export default StoryPage;
