import BtnCloseDiscover from "./BtnCloseDiscover";
import MobileDiscover from "./MobileDiscover/MobileDiscover";
import PcDiscover from "./PcDiscover/PcDiscover";

function ModalDetail({ onCloseBtn, data }) {
  console.log({ data })
  return (
    <>
      <div
        id="discover__detail"
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
      >
        <PcDiscover data={data}/>
        <MobileDiscover data={data}/>

        <BtnCloseDiscover onCloseBtn={onCloseBtn} />
      </div>
    </>
  );
}

export default ModalDetail;
