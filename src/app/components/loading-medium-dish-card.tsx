export default function LoadingMediumDishCard() {
  return (
    <div
      className="flex flex-col h-40 w-40 bg-gray-200 rounded-2xl relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent before:via-white before:to-transparent
isolate
    overflow-hidden"
    >
      <div className="relative w-full h-full bg-gray-300 rounded-2xl -z-10" />
      <div className="p-2 flex items-center">
        <div className="h-4 w-24 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
