import "./Setting.css";
import SettingModal from "./Modal/SettingModal";
import ListSetting from "./ListSetting";
function Setting() {
  return (
    <>
      <section className="pt-[86px] mb-20 ">
        <div className="w-[100%] lg:w-full max-w-[975px] mx-auto p-0 bg-white">
          <div className="w-full md:border border-solid border-[#ccc] flex pb-7">
            <ListSetting />
            <SettingModal />
          </div>
        </div>
      </section>
    </>
  );
}

export default Setting;
