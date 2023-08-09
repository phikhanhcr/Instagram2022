import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useNotify from "../../../../../customHooks/useNotify";
import { getNotificationAsyncThunk } from "../../../../../redux/features/notification/notificationSlice";

import ItemNotification from "./ItemNotification";
import LoadingGif from "../../../../../assert/images/loading.gif";

function NotificationModal({ mewNotify }) {
  const { isLoadingNotify, notifications } = useNotify();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!notifications.length) {
      const promise = dispatch(getNotificationAsyncThunk());
      return () => {
        promise.abort();
      };
    }
  }, [dispatch, notifications.length]);

  return (
    <div
      className="
        border border-solid border-[#e9e9e9]
        fixed left-0 right-0 w-screen top-[56px] 
        header__content-menu-show-notification 
        h-auto max-h-[362px] bg-white 
        rounded=[3px] 
        z-[2] shadow-lg
        animate-showModalNotification
        md:absolute md:w-[500px] 
        md:animate-none
        md:top-[135%] md:left-[-455px] 
      "
    >
      {isLoadingNotify && (
        <div className="flex justify-center items-center h-[100px]">
          <img className="w-[30px]" src={LoadingGif} alt="loading..." />
        </div>
      )}

      <div
        className="arrow_above hidden lg:block hide-on-mobile border-t border-solid border-bac"
        style={{ right: "5%" }}
      ></div>

      <div className="overflow-hidden overflow-y-auto h-full max-h-[362px]">
        <ul>
          {mewNotify ? <ItemNotification data={mewNotify} /> : ""}
          {notifications &&
            notifications.map((ele, index) => <ItemNotification data={ele} key={index} />)}
        </ul>
      </div>
    </div>
  );
}

export default NotificationModal;
