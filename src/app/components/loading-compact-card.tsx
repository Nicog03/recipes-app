export default function LoadingCompactCard() {
  return (
    <>
      <div className=" flex gap-3 items-start bg-gray-200 p-2 rounded-2xl h-fit ">
        <div className="rounded-lg h-20 w-20 object-cover border-2  bg-gray-300" />
        <div className="flex flex-col gap-2">
          <div className="font-montserrat font-semibold text-sm bg-gray-300 h-4 w-40 rounded-full" />
          <div className="font-montserrat font-semibold text-sm bg-gray-300 h-4 w-32 rounded-full" />
        </div>
      </div>
    </>
  );
}
