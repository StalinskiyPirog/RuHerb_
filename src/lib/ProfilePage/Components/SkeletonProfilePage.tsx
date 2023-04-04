

export default function SkeletonProfilePage() {
    return(
       
              <>
                <div className="flex w-full h-[230px] flex-1 flex-col items-center  px-20">
                  <div className="mt-12 w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl p-6 ">
                    <div className="flex flex-col space-y-2">
                      <div className="h-6 w-3/12 rounded-md bg-gray-300 "></div>
                      <div className="w-full h-[200px] rounded-xl p-12 bg-green-500 border-2 border-green-700"></div>
                    </div>
                  </div>
                </div>
              </>
            
    );
}