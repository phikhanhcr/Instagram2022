import ContentCommentMobile from "../../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../../ChildrenComponent/ViewCommentAvatar";

function ReplyCommentMobile() {
  return (
    <ul className="mt-3">
      <li className="flex">
        <ViewCommentAvatar />
        <div className="flex-1">
          <ContentCommentMobile />
        </div>
      </li>
    </ul>
  );
}

export default ReplyCommentMobile;
