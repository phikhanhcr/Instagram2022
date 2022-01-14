import ItemNotification from "./ItemNotification";

function NotificationModal() {
  const data = [
    {
      avatar:
        "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "lanhuonglt262",
      action: "follow",
      followBack: true,
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "lanhuonglt262",
      action: "follow",
      followBack: false,
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "t.linh.222",
      action: "like",
      followBack: true,
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "lanhuonglt262",
      action: "follow",
      followBack: false,
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "t.linh.222",
      action: "like",
      followBack: true,
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "dd_uye_n",
      action: "mentioned",
      followBack: true,
      commentContent: "chị 3 năm vẫn lạc đây dù TP nó bé.Bị mù đường á",
    },
  ];

  return (

    <div
      className="
        border border-solid border-[#e9e9e9]
        fixed left-0 right-0 w-screen top-[56px] 
        header__content-menu-show-notification 
        hidden 
        h-auto max-h-[362px] bg-white 
        rounded=[3px] 
        z-[2] shadow-lg
        animate-showModalNotification
        md:absolute md:w-[500px] 
        md:animate-none
        md:top-[135%] md:left-[-455px] 
      "
    >
      <div
        className="arrow_above hidden lg:block hide-on-mobile"
        style={{ right: "5%" }}
      />
      <div className="overflow-hidden overflow-y-scroll h-full max-h-[362px]">
        <ul>
          {data.length &&
            data.map((ele, index) => (
              <ItemNotification data={ele} key={index} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationModal;
