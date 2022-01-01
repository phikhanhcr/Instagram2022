function AllowCommentButton() {
  return (
    <div>
      <div className="mb-3">Tính năng bình luận</div>
      <div>
        <label htmlFor="check-box-comment">
          <input type="checkbox" id="check-box-comment" hidden />
          <span className="rounded-xl check-allow-comment relative w-10 h-5 cursor-pointer block overflow-hidden transition ease-in duration-500 bg-gray-400"></span>
        </label>
      </div>
    </div>
  );
}

export default AllowCommentButton;
