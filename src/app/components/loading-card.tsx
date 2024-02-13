export default function LoadingCard() {
  return (
    <div
      className=" flex items-end h-60 w-48 bg-gray-200 rounded-3xl relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent before:via-white before:to-transparent
isolate
    overflow-hidden"
    >
      <div className="flex justify-between p-3 h-full w-full ">
        <div className=" flex gap-1 items-end justify-between w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="h-4 w-full bg-gray-300 rounded-full "></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded-full "></div>
          </div>
          <div className="h-10 w-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
