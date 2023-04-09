import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { useEffect, useState } from "react";
import MainBlockFavPage from "@/lib/FavouritePage/MainBlock";
export default function FavouritePage() {
  const [data, setData] = useState(JSON);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/favourite-data").then(async (res) => {
      setData(await res.json());
      setLoading(false);
    });
  }, []);
  const { isEmpty } = useCart();

  return (
    <div>
      <h2 className="text-3xl m-8 p-8 font-bold border-b border-green-500 ">
        Избранное
      </h2>
      <div className="col-span-1 mx-14">
        <MainBlockFavPage empty={isEmpty} />
      </div>
    </div>
  );
}
