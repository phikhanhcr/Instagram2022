function ViewCommentAvatar({ avatar }) {
  return (
    <div
      style={{
        backgroundImage: `url(${avatar})`,
      }}
      className="mr-4 bg-cover bg-center bg-no-repeat h-8 w-8 rounded-full"
    />
  );
}
export default ViewCommentAvatar;
