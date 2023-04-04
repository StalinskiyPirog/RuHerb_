import { useWishlist } from "react-use-wishlist"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "@/lib/MainPage/Components/ProductCard";

interface WishListProps{
    items: Array<object>,
    isWishlistEmpty: boolean
}

function WishList({items, isWishlistEmpty}: WishListProps){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    if (isWishlistEmpty){
        return <div className="w-full h-[200px] rounded-xl p-12 bg-green-500 border-2 border-green-700">Вы пока не добавили ни одного товара в "Избранное"</div>
    } else{
       return <Carousel responsive={responsive}> {items.map((value,index) => (
          <ProductCard key={index} item={value}/>  
        ))
  }
</Carousel>;
          
    }
}

interface CarouselWishlistProps{
  data: JSON
}

export default function CarouselWishlist({data}:CarouselWishlistProps){
    const {items,isWishlistEmpty} = useWishlist();
    return(
            <WishList items={items} isWishlistEmpty={isWishlistEmpty}/>
    )
}