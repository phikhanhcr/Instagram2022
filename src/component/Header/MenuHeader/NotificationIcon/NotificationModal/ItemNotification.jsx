import { Link } from "react-router-dom";
import AvatarNotification from "./AvatarNotification";
import ContentNotification from "./ContentNotification";
import OptionNotification from "./OptionNotification";

const HandleType = ({ children, data }) => {
  if (data.type === 1) {
    return <Link to={`/post/view/${data.root_content}`}>{children}</Link>;
  } else if (data.type === 1) {
    return <Link to={`/post/view/${data.root_content}`}>{children}</Link>;
  } else if (data.type === "mentioned") {
    return <Link to={`/post/view/${data.root_content}`}>{children}</Link>;
  }
};
function ItemNotification({ data }) {
  console.log({ data })
  return (
    <HandleType data={data}>
      <li className="flex items-center justify-between py-3 px-6 hover:bg-[rgb(245, 244, 244)]">
        <AvatarNotification avatar={data.image} />
        <ContentNotification data={data} />
        <OptionNotification data={data} />
      </li>
    </HandleType>
  );
}

export default ItemNotification;
