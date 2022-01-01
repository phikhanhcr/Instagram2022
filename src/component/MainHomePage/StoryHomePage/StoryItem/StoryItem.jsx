function StoryItem() {
  return (
    
    <li className="story-section-item flex flex-col justify-center items-center mr-4">
      <div className="header__wrapper-info_avatar h-[66px] w-[66px] rounded-full flex justify-center items-center has-story story-wrapper-section">
        <a href="/story.html" className="bg-white block p-[2px] rounded-full">
          <div
            className="info_avatar h-[56px] w-[56px] bg-center bg-no-repeat bg-cover rounded-full flex story-info_avatar"
            style={{
              backgroundImage:
                "url(https://cdn.bongdaplus.vn/Assets/Media/2021/05/18/77/Mason-Mount-xuat-sac-nhat-chelsea.jpg)",
            }}
          ></div>
        </a>
      </div>
      <div className="story-section-item_username max-w-[74px] overflow-hidden text-xs mt-[5px]">
        omrtoir88
      </div>
    </li>
  );
}

export default StoryItem;
