import { useDispatch } from "react-redux";
import useRelation from "../../../../customHooks/useRelation";
import ItemUserSuggest from "./ItemUserSuggest/ItemUserSuggest";
import { useEffect } from "react";
import { suggestFollowing } from "../../../../redux/features/relation/relationSlice";

function SuggestFollow() {
  const { users } = useRelation();
  const dispatch = useDispatch();
  console.log({ users })
  useEffect(() => {
      const promise = dispatch(suggestFollowing());
      return () => promise.abort();
  }, [dispatch]);


  return (
    <div className="right-man__people-might-know mb-3">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold opacity-50">Gợi ý cho bạn</p>
        <p className="font-semibold text-xs cursor-pointer">
          Xem tất cả
        </p>
      </div>
      <ul className="people-might-know--list m-0 pl-0">
        {
          users.length && users.map((user) => (
            <ItemUserSuggest key={user.id} user={user} />
          )) 
        }
      </ul>
    </div>
  );
}

export default SuggestFollow;
