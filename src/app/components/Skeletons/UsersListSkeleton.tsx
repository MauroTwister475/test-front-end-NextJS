
export function UsersListSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((skeleton, index) => (
        <li key={index} className="w-full shadow-sm h-14 rounded-lg bg-white px-6 flex items-center justify-between animate-pulse">
          <div className="text-gray-500 flex items-center gap-2">
            <div className="bg-gray-300 rounded-sm w-32 h-4 animate-pulse" />
          </div>
          <div className="text-gray-500">
            <div className="bg-gray-300  rounded-sm w-32 h-4 animate-pulse" />
          </div>
          <div className="text-gray-500">
            <div className="bg-gray-300  rounded-sm w-32 h-4 animate-pulse" />
          </div>
          <div className="text-gray-500">
            <div className="bg-gray-300  rounded-sm w-32 h-4 animate-pulse" />
          </div>
          <div className="text-gray-500">
            <div className="bg-gray-300  rounded-sm w-32 h-4 animate-pulse" />
          </div>
          <div className="text-gray-500">
            <div className="bg-gray-300  rounded-sm w-32 h-4 animate-pulse" />
          </div>
        </li>
      ))}
    </>
  )
}

