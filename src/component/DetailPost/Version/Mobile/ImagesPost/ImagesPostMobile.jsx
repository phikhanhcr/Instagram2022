function ImagesPostMobile() {
  return (
    <div className="h-full relative overflow-hidden max-w-[1000px]">
      <div className="h-full relative block">
        <div className="top-1 left-2 opacity-[0.7] absolute text-white">
          1 / 2
        </div>
        <img
          src="https://images.unsplash.com/photo-1636072237628-4dec9190cfe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          className="post-section__image h-full w-auto"
          alt=""
        />
      </div>
      <p className="text-black cursor-pointer absolute top-[50%] left-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]">
        ❮
      </p>
      <p className="text-black cursor-pointer absolute top-[50%] right-3 h-6 w-6 text-[12px] flex items-center justify-center opacity-[0.5] bg-white rounded-[50%]">
        ❯
      </p>
    </div>
  );
}

export default ImagesPostMobile;
