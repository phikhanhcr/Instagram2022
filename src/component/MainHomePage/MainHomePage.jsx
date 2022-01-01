import { useEffect } from "react";
import PostHomePage from "./PostHomePage/PostHomePage";
import RightSection from "./RightSection/RightSection";
import StoryHomePage from "./StoryHomePage/StoryHomePage";

const initWidthScreen = window.innerWidth;

function MainHomePage() {
  useEffect(() => {
    const rightMain = document.getElementById("right-main");
    const initPaddingWrapperMain = document.getElementById("wrapper-main");

    // find margin left
    const marginLeft =
      (initWidthScreen - initPaddingWrapperMain.offsetWidth) / 2;
    rightMain.style.right = `${parseInt(marginLeft) - 12}px`;

    const handleREsize = function (event) {
      const newWidth = window.innerWidth;
      rightMain.style.right = `${(newWidth - 975) / 2 - 12}px`;
      if (newWidth >= 1036 && newWidth <= 1239) {
        rightMain.style.maxWidth = `${332 - 10}px`;
      }
    };

    window.addEventListener("resize", handleREsize);
    // cleanup function
    return () => {
      window.removeEventListener("resize", handleREsize);
    };
  }, []);
  return (
    <section className="pt-0 md:pt-[30px]">
      <div
        className="pt-header_height w-full md:max-w-[600px] lg:max-w-[975px] mx-auto my-0 p-0"
        id="wrapper-main"
      >
        <div className="flex flex-wrap -mx-1">
          <div className="px-1 w-full lg:w-8/12 left-main" id="left-main">
            <StoryHomePage />

            <PostHomePage />
          </div>

          <RightSection />
        </div>
      </div>
    </section>
  );
}

export default MainHomePage;
