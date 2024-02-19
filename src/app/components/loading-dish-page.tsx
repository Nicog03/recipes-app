import SquaredButton from "./squared-button";

export default function LoadingDishPage() {
  return (
    <div
      className="p-5 flex flex-col gap-6 h-screen 
      relative before:absolute 
      before:inset-0 before:-translate-x-full
      before:animate-[shimmer_2s_infinite]
      before:bg-gradient-to-r before:from-transparent 
      before:via-white before:to-transparent
      isolate overflow-hidden sm:max-w-3xl mx-auto"
    >
      {/* dish image */}
      <div className="relative -z-10">
        <div className="absolute left-3 top-3">
          <div className="h-10 w-10 bg-gray-300 rounded-lg" />
        </div>
        <div className="h-80 w-full rounded-3xl bg-gray-200" />
        <span className="absolute right-3 -bottom-5 ">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        </span>
      </div>
      {/* header */}
      <div className="flex flex-col gap-1">
        <div className="rounded-full h-8 w-40 bg-gray-300" />
        <div className="rounded-full h-3 w-28 bg-gray-300" />
      </div>
      {/* description */}
      <div className="flex flex-col gap-1">
        <div className="rounded-full h-4 w-full bg-gray-300" />
        <div className="rounded-full h-4 w-full bg-gray-300" />
        <div className="rounded-full h-4 w-full bg-gray-300" />
        <div className="rounded-full h-4 w-full bg-gray-300" />
        <div className="rounded-full h-4 w-full bg-gray-300" />
        <div className="rounded-full h-3 w-28 bg-gray-300" />
      </div>
      {/* section */}
      <div className="flex flex-col gap-3">
        <div className="rounded-full h-5 w-40 bg-gray-300" />
        <div className="flex gap-2">
          <div className="h-20 w-20 rounded-3xl bg-gray-300" />
          <div className="h-20 w-20 rounded-3xl bg-gray-300" />
          <div className="h-20 w-20 rounded-3xl bg-gray-300" />
          <div className="h-20 w-20 rounded-3xl bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
