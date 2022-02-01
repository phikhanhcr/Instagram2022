import OverlayLikeComment from "../../OverlayLikeComment/OverlayLikeComment";

function EachItemDetail({ data, onClickShowDetail }) {
  console.log(data)
  return (
    <div
      className="group w-full bg-cover bg-no-repeat bg-center relative discover-section_img"
      style={{
        backgroundImage: `url(${data.images[0]})`,
      }}
      onClick={() => onClickShowDetail(data)}
    >
      <OverlayLikeComment />
    </div>
  );
}

export default EachItemDetail;
