import EachMessage from "./EachMessage/EachMessage";

function ListMessage({ testMessage }) {
  return (
    <div className="message flex-1 w-full h-[60%]">
      <ul className="px-5 pt-[4.25rem] pb-[4.25rem] md:pb-0 md:pt-5 w-full h-full overflow-hidden overflow-y-auto flex flex-col-reverse">
        {testMessage.length &&
          testMessage.map((ele, index) => (
            <EachMessage message={ele} key={index} />
          ))}
      </ul>
    </div>
  );
}

export default ListMessage;
