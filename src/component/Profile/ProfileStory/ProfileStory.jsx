import { memo } from "react";

function ProfileStory() {
  
  return (
    <div className="mb-11">
      <ul className="flex ml-12 overflow-x-auto">
        <li className="mr-3.5 flex flex-col justify-center items-center w-[115px]">
          <div className="h-[87px] w-[87px] bg-[#e9e9e9] p-1 relative flex justify-center items-center rounded-full">
            <a href="/story.html" className="bg-white block p-0.5 rounded-full">
              <div
                className="h-[77px] w-[77px] bg-center bg-cover bg-no-repeat flex rounded-full"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1624391673156-a7b7f6c5fb12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)",
                }}
              ></div>
            </a>
          </div>
          <div className="text-center mt-4 overflow-hidden max-w-[87px] font-semibold cursor-pointer text-sm w-full">
            Guitar
          </div>
        </li>
        <li className="mr-3.5 flex flex-col justify-center items-center w-[115px]">
          <div className="h-[87px] w-[87px] bg-[#e9e9e9] p-1 relative flex justify-center items-center rounded-full">
            <a href="/" className="bg-white block p-0.5 rounded-full">
              <div
                className="h-[77px] w-[77px] bg-center bg-cover bg-no-repeat flex rounded-full"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)",
                }}
              ></div>
            </a>
          </div>
          <div className="text-center mt-4 overflow-hidden max-w-[87px] font-semibold cursor-pointer text-sm">
            Moon
          </div>
        </li>
        <li className="mr-3.5 flex flex-col justify-center items-center w-[115px]">
          <div className="h-[87px] w-[87px] bg-[#e9e9e9] p-1 relative flex justify-center items-center rounded-full">
            <a href="/" className="bg-white block p-0.5 rounded-full">
              <div
                className="h-[77px] w-[77px] bg-center bg-cover bg-no-repeat flex rounded-full"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1516822003754-cca485356ecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)",
                }}
              ></div>
            </a>
          </div>
          <div className="text-center mt-4 overflow-hidden max-w-[87px] font-semibold cursor-pointer text-sm">
            Pals
          </div>
        </li>
      </ul>
    </div>
  );
}

export default memo(ProfileStory);
