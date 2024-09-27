function OptionNotification({ data }) {
  const creativeContentOption = (data) => {
    if (data.type === "follow") {
      return data.followBack ? (
        <button className="text-sm text-center font-medium opacity-70 rounded-[4px] border border-solid border-[#ccc] py-[5px] px-[9px]">
          Đang theo dõi
        </button>
      ) : (
        <button className="text-sm text-center rounded-[4px] bg-[#0095f6] text-white py-[5px] px-[9px]">
          Theo dõi
        </button>
      );
    } else if (data.type === "comment" || data.type === "mentioned" || data.type === "like") {
      return (
        <div
          className="notification-image-item"
          style={{
            backgroundImage: `url(${data.image})`,
          }}
        ></div>
      );
    }
  };

  return <div>{creativeContentOption(data)}</div>;
}

export default OptionNotification;
