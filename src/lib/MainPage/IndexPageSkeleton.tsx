import { SkeletonCarouselWishlist } from "./Components/SkeletonCarouselWishlist";

export const IndexPageSkeleton = () => {
    return (
      <>
        <div className="w-full h-[90vh] animate-pulse flex-row items-center justify-center  rounded-xl border p-6 ">
            
              <div className="h-full w-full rounded-md bg-[#98cc61] "></div>

          </div>

        <SkeletonCarouselWishlist />
      </>
    );
  };