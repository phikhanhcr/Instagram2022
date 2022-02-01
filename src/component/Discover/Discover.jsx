import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import usePost from "../../customHooks/usePost";
import { postDiscover } from "../../redux/features/post/postSlice";
import ContentLoaderComponent from "../Commom/ContentLoader";
import Header from "../Header/Header";
import ModalDetail from "./ModalDetail/ModalDetail";
import NormalDiscover from "./NormalDiscover/NormalDiscover";
import TopDiscover from "./TopDiscover/TopDiscover";

function Discover() {
  const [checkShowModal, setCHeckShowModal] = useState(false);
  const [detailDiscover, setDetailDiscover] = useState({});

  const { discoverPost, isLoading } = usePost();
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(postDiscover());
    return () => promise.abort();
  }, [dispatch]);

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

  const handleClickShowDetail = useCallback((data) => {
    setDetailDiscover(data);
    setCHeckShowModal(true);
  }, []);

  const handleCloseBtn = () => {
    setCHeckShowModal(false);
  };

  return (
    <>
      <Header />
      <section className="pt-[60px] md:pt-[90px]">
        {
          isLoading && <ContentLoaderComponent />
        }
        <div className="w-[100%] lg:w-full max-w-[975px] mx-auto p-0">
          <TopDiscover
            data={discoverPost}
            onClickShowDetail={handleClickShowDetail}
          />
          <NormalDiscover
            data={discoverPost}
            onClickShowDetail={handleClickShowDetail}
          />
        </div>
      </section>
      {checkShowModal && (
        <ModalDetail onCloseBtn={handleCloseBtn} data={detailDiscover} />
      )}
    </>
  );
}

export default Discover;
