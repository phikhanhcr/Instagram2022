function PictureTablet() {
  return (
    <div className="max-w-[70%] h-full">
      <div className="relative overflow-hidden h-full">
        <div className="relative block  h-full">
          <div className="top-1 left-2 opacity-[0.7] absolute text-white">
            2 / 2
          </div>
          <img
            src="https://images.unsplash.com/photo-1636142536407-0e1d43cfd3db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
            className=" rounded-l-sm max-h-full h-full w-auto"
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
    </div>
  );
}

export default PictureTablet;
