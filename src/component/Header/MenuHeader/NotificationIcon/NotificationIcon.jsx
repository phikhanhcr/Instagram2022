import { useEffect } from "react";
import { useState } from "react";
import NotificationModal from "./NotificationModal/NotificationModal";
import { useDispatch } from "react-redux";
import { markAllReadNotificationAsyncThunk } from "../../../../redux/features/notification/notificationSlice";
// import useNotify from "../../../../customHooks/useNotify";

function NotificationIcon() {
  // 1. when user open modal notify, set all read
  // 2. when user has a new notify, display modal having new notification like Instagram
  // 3. display red dot when user has any unread notifications
  // 3 types
  const [checkShowModal, setShowModal] = useState(false);
  const [checkNotify, setCheckNotify] = useState(false);
  const [mewNotify, setNewNotify] = useState(null);
  const dispatch = useDispatch();


  const handleShowModal = () => {
    setShowModal(true);
    setCheckNotify(false);
    setNewNotify(null);
   
  };
  return (
    <>
      <div
        className="ml-[22px] cursor-pointer relative"
        onClick={handleShowModal}
      >
        <label
          htmlFor="input_checkbox-notification"
          className="header__content-menu-link"
        >
          <svg
            aria-label="Nguồn cấp dữ liệu hoạt động"
            className="_8-yf5"
            color="#262626"
            fill="#262626"
            height={22}
            role="img"
            viewBox="0 0 48 48"
            width={22}
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </label>

        {checkShowModal && <NotificationModal mewNotify={mewNotify} />}

        {/* having new notifications */}
        {true && (
          <div className="absolute h-1 w-1 right-[9px] bottom-[-7px] rounded-full bg-red-600"></div>
        )}
        {checkNotify && (
          <div className="absolute h-1 w-1 right-[9px] bottom-[-7px] rounded-full bg-red-600"></div>
        )}
      </div>

      {checkShowModal && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 z-[1]"
          onClick={() => setShowModal(false)}
        ></div>
      )}
    </>
  );
}

export default NotificationIcon;
