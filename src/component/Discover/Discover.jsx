import { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import ModalDetail from "./ModalDetail/ModalDetail";
import NormalDiscover from "./NormalDiscover/NormalDiscover";
import TopDiscover from "./TopDiscover/TopDiscover";
const data = [
  {
    url: [
      "https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1638984849670-7f41daa1ba6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1638984849670-7f41daa1ba6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1639046033583-390653f5c09a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1608932586265-b2cf90defaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1608932586265-b2cf90defaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1608932586265-b2cf90defaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1608932586265-b2cf90defaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1608932586265-b2cf90defaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
  {
    url: [
      "https://images.unsplash.com/photo-1585104213608-3f65359b908a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    ],
    likeCount: 234,
    commentCount: 12,
  },
];

function Discover() {
  useEffect(() => {
    const allDiscoverImage = document.querySelectorAll(".discover-section_img");
    allDiscoverImage.forEach((ele) => {
      ele.style.height = `${ele.offsetWidth}px`;
    });
    const handleResizeWindow = () => {
      allDiscoverImage.forEach((ele) => {
        ele.style.height = `${ele.offsetWidth}px`;
      });
    };
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      return window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const [detailDiscover, setDetailDiscover] = useState({});

  const [checkShowModal, setCHeckShowModal] = useState(false);
  const handleClickShowDetail = useCallback((data) => {
    setDetailDiscover(data);
    setCHeckShowModal(true);
  }, [])

  const handleCloseBtn = () => {
    setCHeckShowModal(false);
  };
  return (
    <>
      <Header />

      <section className="pt-[60px] md:pt-[90px]">
        <div className="w-[100%] lg:w-full max-w-[975px] mx-auto p-0">
          <TopDiscover
            data={data.slice(0, 3)}
            onClickShowDetail={handleClickShowDetail}
          />
          <NormalDiscover
            data={data.slice(3)}
            onClickShowDetail={handleClickShowDetail}
          />
        </div>

        {checkShowModal && (
          <ModalDetail onCloseBtn={handleCloseBtn} data={detailDiscover} />
        )}
      </section>
    </>
  );
}

export default Discover;
