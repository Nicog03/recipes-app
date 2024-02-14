export default function LoadingLargeDishCard() {
  return (
    <div
      className="w-full h-52 flex flex-col bg-gray-100 rounded-2xl relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent before:via-white before:to-transparent
isolate
    overflow-hidden"
    >
      <div className="relative w-full h-full rounded-2xl bg-gray-200 -z-10"></div>
      <div className="p-2 flex flex-col gap-2">
        <div className="h-4 w-52 bg-gray-200 rounded-full" />
        <div className="h-4 w-36 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
