export function SkeletonLoader() {
  return (
    <section
      className="space-y-8 py-10"
      aria-live="polite" 
    >
      <h2 className="sr-only">Loading Content</h2> 

      {/* Skeleton for Image */}
      <div
        className="w-full h-72 bg-gray-300 animate-pulse rounded-md"
        role="progressbar"
        aria-label="Loading image"
      ></div>

      {/* Skeleton for Text */}
      <div
        className="w-full h-8 bg-gray-300 animate-pulse rounded-md"
        role="progressbar"
        aria-label="Loading title text"
      ></div>
      <div
        className="w-3/4 h-6 bg-gray-300 animate-pulse rounded-md"
        role="progressbar"
        aria-label="Loading description text"
      ></div>

      {/* Skeleton for Button */}
      <div
        className="w-40 h-10 bg-gray-300 animate-pulse rounded-md"
        role="progressbar"
        aria-label="Loading button"
      ></div>
    </section>
  );
}
