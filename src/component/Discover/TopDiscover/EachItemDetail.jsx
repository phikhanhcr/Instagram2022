import OverlayLikeComment from "../../OverlayLikeComment/OverlayLikeComment";

function EachItemDetail({ data, onClickShowDetail }) {
  return (
    <div
      className="group w-full bg-cover bg-no-repeat bg-center relative discover-section_img"
      style={{
        backgroundImage: `url(${data.url[0]})`,
      }}
      onClick={() => onClickShowDetail(data)}
    >
      <OverlayLikeComment />
    </div>
  );
}

export default EachItemDetail;
