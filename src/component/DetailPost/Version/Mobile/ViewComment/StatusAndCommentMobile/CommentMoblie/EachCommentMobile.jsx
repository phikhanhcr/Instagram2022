import ContentCommentMobile from "../../ChildrenComponent/ContentCommentMobile";
import ViewCommentAvatar from "../../ChildrenComponent/ViewCommentAvatar";
import ReplyCommentMobile from "./ReplyCommentMobile/ReplyCommentMobile";

function EachCommentMobile() {
  return (
    <li className="flex mt-4 pb-3">
      <ViewCommentAvatar />
      <div className="text-xs flex-1">
        <ContentCommentMobile />
        <div className="mt-3">
          <button className="opacity-70" type="button">
            <div className="border-b border-solid inline-block h-0 w-6 align-middle mr-4" />
            <span>Xem câu trả lời (2)</span>
          </button>
         <ReplyCommentMobile />
        </div>
      </div>
    </li>
  );
}
export default EachCommentMobile;
