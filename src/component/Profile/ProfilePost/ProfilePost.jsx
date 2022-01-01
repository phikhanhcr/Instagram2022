import ProfileEachPost from "./ProfileEachPost";
import NoPicTag from '../../../assert/images/no-pic-tag.png'
const data = [
  {
    url: "https://images.unsplash.com/photo-1586265980119-cb543ede642a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    type: "images",
  },
  {
    url: "https://images.unsplash.com/photo-1638814363688-0e8564e3ef66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    type: "video",
  },
  {
    url: "https://images.unsplash.com/photo-1638855519814-ce793e5efcaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    type: "reels",
  },
  {
    url: "https://images.unsplash.com/photo-1636167286929-6e583bcef820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    type: "video",
  },
  {
    url: "https://images.unsplash.com/photo-1637819286889-a37a44c1e503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    type: "reels",
  },
  {
    url: "https://images.unsplash.com/photo-1631858687695-e374c9126982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    type: "images",
  },
];

function ProfilePost() {
  return (
    <div className="flex flex-wrap -px-1 lg:-mx-3.5">
     
      {
        data.map((ele, index ) =>  <ProfileEachPost type={ele.type} src={ele.url} key={index} />)
      }

      {/* if there is nothing to show  */}
      <div className="w-full h-[300px] flex items-center">
        <div className="w-[350px] m-auto flex flex-col items-center">
          <div className="mb-4">
            <img
              src={NoPicTag}
              className="h-[72px] w-[72px]"
              alt="no-tag-pic"
            />
          </div>
          <div className="mb-6 text-[28px] font-light">Ảnh có mặt bạn</div>
          <div className="text-center text-sm ">
            Khi mọi người gắn thẻ bạn trong ảnh, ảnh sẽ xuất hiện tại đây.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePost;
