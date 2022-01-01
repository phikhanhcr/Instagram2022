function AvatarNotification({ avatar }) {
  
  return (
    <div className="h-[47px] w-[47px] rounded-full flex justify-center items-center">
      <a href="/">
        <div
          className="h-[39px] w-[39px] bg-center bg-cover bg-no-repeat rounded-full flex"
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        ></div>
      </a>
    </div>
  );
}

export default AvatarNotification;
