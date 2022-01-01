import ChangeInfo from "./ChangeInfo";
import ChangePassword from "./ChangePassword";

function SettingModal() {
  return (
    <div className="w-full md:w-9/12 mx-5 md:mx-0">
      <ChangePassword />
      <ChangeInfo />
    </div>
  );
}

export default SettingModal;
