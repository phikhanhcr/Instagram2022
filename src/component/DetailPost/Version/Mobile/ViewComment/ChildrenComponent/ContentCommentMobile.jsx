function ContentCommentMobile({ status }) {
  return (
    <>
      <div>
        <a href="/" className="font-semibold mr-2">
          phikhanhcr
        </a>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          qui, repudiandae aperiam recusandae natus sint voluptatum perferendis
          consequuntur iusto quaerat similique architecto. Consequatur et dolore
          hic possimus eum, facere veritatis?
        </span>
      </div>

      <div className="mt-3 opacity-70">
        <span className="mr-3 cursor-pointer">1 day</span>
        {!status && <span className="cursor-pointer">Reply</span>}
      </div>
    </>
  );
}

export default ContentCommentMobile;
