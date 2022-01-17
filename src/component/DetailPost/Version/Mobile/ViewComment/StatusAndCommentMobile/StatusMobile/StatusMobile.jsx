import ContentCommentMobile from "../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../ChildrenComponent/ViewCommentAvatar";

function StatusMoblie() {
  return (
    <ul className="border-b border-solid border-[#e2e2e2] pb-5">
      <li className="flex">
        <ViewCommentAvatar />
        <div className="text-xs flex-1">
          <ContentCommentMobile status/>
        </div>
      </li>
    </ul>
  );
}
export default StatusMoblie;
