import HeaderViewComment from "./ChildrenComponent/HeaderViewComment";
import ViewCommentAvatar from "./ChildrenComponent/ViewCommentAvatar";
import StatusAndCommentMobile from "./StatusAndCommentMobile/StatusAndCommentMobile";
import useAuthentication from '../../../../../customHooks/useAuthentication'
function ViewComment() {
  const { user } = useAuthentication();
  const { avatar } = user;
  return (
    <section className="view-comment bg-white">
      <HeaderViewComment />

      <div className="fixed top-[56px] h-[65px] w-full right-0 left-0 bg-gray-200">
        <div className="flex h-full items-center px-4">
          <ViewCommentAvatar avatar={avatar}/>
          <div className="flex-1">
            <form
              action
              className="flex bg-white overflow-hidden rounded-3xl px-3 text-sm"
            >
              <input
                type="text"
                className="w-full rounded-3xl py-3 mr-2 outline-none"
                placeholder="Thêm bình luận...."
              />
              <button className="text-[#0095f6] font-semibold">Đăng</button>
            </form>
          </div>
        </div>
        {/* status post */}
        {/* calculate height of screen minus 62px */}

        <StatusAndCommentMobile />
      </div>
    </section>
  );
}

export default ViewComment;
