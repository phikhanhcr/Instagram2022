import AvatarNotification from "./AvatarNotification";
import ContentNotification from "./ContentNotification";
import OptionNotification from "./OptionNotification";

function ItemNotification({ data }) {
  return (

    <li className="flex items-center justify-between py-3 px-6 hover:bg-[rgb(245, 244, 244)]">
      <AvatarNotification avatar={data.avatar} />
      <ContentNotification data={data} />
      <OptionNotification data={data}/>
      
    </li>
  );
}

export default ItemNotification;
