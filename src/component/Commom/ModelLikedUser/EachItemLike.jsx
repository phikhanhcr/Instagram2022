function EachItemLike({data}) {
  return (
    <li className="flex items-center cursor-pointer px-4 py-2 hover:bg-[#eee]">
      <div
        style={{
          backgroundImage:
            `url(${data.avatar})`,
        }}
        className="rounded-full w-[30px] h-[30px] bg-cover bg-center bg-no-repeat mr-3.5"
      ></div>
      <div className="flex-1 text-sm">
        <a
          href="/"
          className=" hover:underline font-semibold leading-3 block mb-1"
        >
          {" "}
          {data.username}
        </a>
        <span className="mt-2">Zen</span>
      </div>
      <div>
        <button className="border border-solid border-[#aaa] rounded-md px-2 py-1">
          Follow
        </button>
      </div>
    </li>
  );
}

export default EachItemLike;
