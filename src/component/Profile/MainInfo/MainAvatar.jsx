function MainAvatar({ avatar }) {
  return (
    <div className="w-4/12 flex justify-center">
      <div
        style={{
          backgroundImage:
            `url(${avatar})`,
        }}
        className="rounded-full w-[77px] h-[77px] md:w-[150px] md:h-[150px] bg-cover bg-center bg-no-repeat"
      ></div>
    </div>
  );
}

export default MainAvatar;
