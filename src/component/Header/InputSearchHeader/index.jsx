import { useState } from "react";
import HistorySearch from "./HistorySearch/HistorySearch";

function InputSearchHeader() {
  const [clickSearch, setClickSearch] = useState(false);

  return (
    <div className="mt-[-4px] header__content-input hidden md:flex relative justify-center items-center h-5 w-[215px]">
      <input
        type="text"
        className="focus:text-left header__content-input-form border border-solid border-[#ccc] text-sm outline-none py-[3px] pr-2.5 pl-[26px] rounded-[3px] text-center h-7"
        placeholder="Tìm kiếm"
        onClick={() => setClickSearch(true)}
      />

      {clickSearch && (
        <label
          className="fixed top-0 left-0 right-0 bottom-0 z-[1] select-none"
          onClick={() => setClickSearch(false)}
        />
      )}
      
      <span className="header__content-input--search  absolute left-[30%] block top-[25%] w-3 h-3 cursor-default select-none">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          className="svg-inline--fa fa-search fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </span>
      <span className="header__content-input--remove hidden  right-[13%] top-[25%] absolute w-3 h-3">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times-circle"
          className="svg-inline--fa fa-times-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          ></path>
        </svg>
      </span>
      {clickSearch && <HistorySearch />}
    </div>
  );
}

export default InputSearchHeader;
