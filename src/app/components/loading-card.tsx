export default function LoadingCard() {
  return (
    <div
      className=" flex items-end h-60 w-48 bg-gray-200 rounded-3xl 
    bg-gradient-to-r 
from-gray-200 
via-gray-300
to-gray-200 
animate-gradient-x"
    >
      <div className="flex justify-between p-3 h-full w-full ">
        <div className=" flex gap-1 items-end justify-between w-full">
          <div className="flex flex-col gap-2 w-full">
            <div
              className="h-4 w-full bg-white rounded-full bg-gradient-to-r 
from-gray-400 
via-gray-200
to-gray-400 
animate-gradient-x"
            ></div>
            <div
              className="h-4 w-1/2 bg-white rounded-full bg-gradient-to-r 
              from-gray-400 
via-gray-200
to-gray-400
animate-gradient-x"
            ></div>
          </div>
          <div
            className="h-10 w-10 bg-white rounded-full flex-shrink-0 bg-gradient-to-r 
            from-gray-400 
            via-gray-200
            to-gray-400 
animate-gradient-x"
          ></div>
        </div>
      </div>
    </div>
  );
}
