 export default function Loading() {
  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="border rounded-xl p-4 shadow-sm"
          >

            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-400 rounded-lg animate-pulse"></div>

            {/* Title Skeleton */}
            <div className="h-5 bg-gray-400 rounded mt-4 w-3/4 animate-pulse"></div>

            {/* Rating Skeleton */}
            <div className="h-4 bg-gray-400 rounded mt-3 w-1/3 animate-pulse"></div>

            {/* Price Skeleton */}
            <div className="h-6 bg-gray-400 rounded mt-3 w-1/2 animate-pulse"></div>

            {/* Button Skeleton */}
            <div className="h-10 bg-gray-400 rounded-lg mt-4 animate-pulse"></div>

          </div>
        ))}

      </div>

    </main>
  );
}