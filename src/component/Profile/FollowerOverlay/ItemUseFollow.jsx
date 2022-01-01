function ItemUseFollow() {
  return (
    <li className="flex items-center px-4 py-2 ">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1607142426428-ce8910c7e425?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)",
        }}
        className="rounded-full w-[30px] h-[30px] bg-cover bg-center bg-no-repeat mr-3.5"
      ></div>
      <div className="flex-1 text-sm">
        <a
          href="/"
          className=" hover:underline font-semibold leading-3 block mb-1"
        >
          {" "}
          cclarazen
        </a>
        <span className="mt-2">Zen</span>
      </div>
      <div>
        <button className="border border-solid border-[#aaa] rounded-md px-2 py-1">
          Xóa
        </button>
      </div>
    </li>
  );
}

export default ItemUseFollow;
