import LoadingCompactCard from "../loading-compact-card";

export default function LoadingSearchResultSection() {
  return (
    <div
      className="p-5 flex flex-col gap-2 rounded-ss-2xl rounded-se-2xl  h-full relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent before:via-white before:to-transparent
isolate
    overflow-hidden
    "
    >
      <div className="h-8 w-3/4 bg-gray-300 rounded-full" />
      <LoadingCompactCard />
      <LoadingCompactCard />
      <LoadingCompactCard />
    </div>
  );
}
