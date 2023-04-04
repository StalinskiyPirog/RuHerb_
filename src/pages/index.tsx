import Banner from "@/lib/MainPage/Banner";
import CarouselWishlist from "@/lib/MainPage/CarouselWishlist";
import CategoryMenu from "@/lib/MainPage/CategoryMenu";
import { IndexPageSkeleton } from "@/lib/MainPage/IndexPageSkeleton";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(JSON);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/index-data")
      .then(async (res) => {
        setData(await res.json());
        setLoading(false);
      });
  }, []);

  if (isLoading){
    return <IndexPageSkeleton />
  } else {
    return (
        <div className="flex flex-col justify-center gap-20 p-10 pt-0">
          <Banner />
          <h1 className="text-3xl">Ваше избранное</h1>
          <CarouselWishlist data={data}/>
        </div>
      );
  }

  
}
