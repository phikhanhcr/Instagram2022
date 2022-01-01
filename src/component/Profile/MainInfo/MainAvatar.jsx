function MainAvatar() {
  return (
    <div className="w-4/12 flex justify-center">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1494177310973-4841f7d5a882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)",
        }}
        className="rounded-full w-[77px] h-[77px] md:w-[150px] md:h-[150px] bg-cover bg-center bg-no-repeat"
      ></div>
    </div>
  );
}

export default MainAvatar;
