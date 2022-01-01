function CountNumber({ count }) {
  return (
    <div className="flex items-center justify-center text-white text-xs absolute w-[18px] h-[18px] rounded-full bg-red-500 top-[-6px] -right-2">
      <div>{count}</div>
    </div>
  );
}

export default CountNumber;
