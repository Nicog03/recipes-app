import SquaredButton from "./squared-button";

const numOfLines = [0, 0, 0, 0, 0];

export default function LoadingDishPage() {
  return (
    <div className="p-5 flex flex-col gap-6 h-screen ">
      {/* dish image */}
      <div className="relative">
        <div className="absolute left-3 top-3">
          <SquaredButton imageUrl="/icons/left-caret-icon.svg" />
        </div>
        <div
          className="h-80 w-full object-cover rounded-3xl bg-gradient-to-r
            from-gray-200
            via-gray-300
            to-gray-200
            animate-gradient-x"
        />
        <span className="absolute right-3 -bottom-5 ">
          <div
            className="h-10 w-10 rounded-full bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
          ></div>
        </span>
      </div>
      {/* header */}
      <div className="flex flex-col gap-1">
        <div
          className="rounded-full h-8 w-40 bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
        />
        <div
          className="rounded-full h-3 w-28 bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
        />
      </div>
      {/* description */}
      <div className="flex flex-col gap-1">
        {numOfLines.map((line) => (
          <div
            className="rounded-full h-4 w-full bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
          />
        ))}
        <div
          className="rounded-full h-3 w-28 bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
        />
      </div>
      {/* section */}
      <div className="flex flex-col gap-3">
        <div
          className="rounded-full h-5 w-40 bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
        />
        <div className="flex gap-2">
          <div
            className="h-20 w-20 rounded-3xl bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
          />
          <div
            className="h-20 w-20 rounded-3xl bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
          />
          <div
            className="h-20 w-20 rounded-3xl bg-gradient-to-r 
        from-gray-400 
        via-gray-200
        to-gray-400 
        animate-gradient-x"
          />
        </div>
      </div>
    </div>
  );
}
