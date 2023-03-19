import { useState } from "react";
import AllowCommentButton from "./AllowCommentButton";
import useAuthentication from "../../../../../customHooks/useAuthentication";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../../../../../redux/features/post/postSlice";
import usePost from "../../../../../customHooks/usePost";
import { API_UPDATE_IMAGES } from "../../../../../config/common";
function UploadStatus({ onClickNextStep, file, handleUploadSuccessfully }) {
  const dispatch = useDispatch();
  const { user } = useAuthentication();
  const [description, setDescription] = useState("");
  const [checkSendOrNot, setCheckSendOrNot] = useState(false);

  const { checkUploadSuccess } = usePost();
  if (checkUploadSuccess) {
    handleUploadSuccessfully();
  }

  const uploadFile = async () => {
    setCheckSendOrNot(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Instagram");
    const res = await fetch(
      API_UPDATE_IMAGES,
      {
        method: "POST",
        body: data,
      }
    );

    const dataFile = await res.json();
    const dataSendServer = {
      description,
      images: [dataFile.url],
      type: "post",
    };
    dispatch(createPostAsync(dataSendServer));
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="text-sm w-[80%]">
        <div className="flex mb-3 items-center">
          <div
            style={{
              backgroundImage: `url(${user.avatar})`,
            }}
            className="bg-cover bg-center bg-no-repeat w-8 h-8 rounded-full mr-3"
          ></div>
          <p className="font-semibold">{user.username}</p>
        </div>
        <div className="mb-3 text-base">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Viết chú thích"
            className="outline-none w-[80%] h-auto resize-none max-h-{168px] md:min-h-[168px]"
          />
        </div>
        <AllowCommentButton />
        <div className="flex mt-3">
          <div
            onClick={onClickNextStep}
            className="mr-3 cursor-pointer mt-3 border border-solid border-transparent bg-[#0095f6] text-white rounded text-center text-sm appearance-none py-[5px] px-[9px]"
          >
            {"<"} Trở lại
          </div>
          {checkSendOrNot ? (
            <button className="cursor-pointer select-none opacity-70 mt-3 border border-solid border-transparent bg-[#0095f6] text-white rounded text-center text-sm appearance-none py-[5px] px-[9px]">
              Uploading
            </button>
          ) : (
            <button
              onClick={uploadFile}
              className="cursor-pointer mt-3 border border-solid border-transparent bg-[#0095f6] text-white rounded text-center text-sm appearance-none py-[5px] px-[9px]"
            >
              Chia sẻ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadStatus;
