import StoryItem from "./StoryItem/StoryItem";

function StoryHomePage() {
  return (
    <div className="bg-[#fff] w-full max-w-full py-4 border border-solid border-[#ccc] mb-6 bg-[rgba(255, 255, 255, 1)]">
      <ul className="story-section-list flex items-center h-auto overflow-x-auto scrollbar-hide">
        <li className="ml-6" />
        <StoryItem />
      </ul>
    </div>
  );
}

export default StoryHomePage;
