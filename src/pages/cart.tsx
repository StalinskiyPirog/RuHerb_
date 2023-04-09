import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { useState } from "react";
import CartItems from "@/lib/CartPage/CartItems";

export default function CheckoutPage() {
  const {items, isEmpty, getItem, removeItem, addItem, updateItemQuantity} = useCart();
  const {
    addWishlistItem,
    removeWishlistItem,
    inWishlist
  } = useWishlist();
  function handler(id:string, name:string, price:string) {
    inWishlist(id)
      ? setTimeout(()=>removeWishlistItem(id), 500)
      : setTimeout(()=>
          addWishlistItem({ id: id, name: name, price: +price }),
          500
        );
  }
  const optionsDelivery = [
    { value: 'Самовывоз', label: 'Самовывоз' },
    { value: 'Доставка', label: 'Доставка' },
  ];
  const optionsPayment = [
    { value: 'онлайн', label: 'Онлайн' },
    { value: 'наличные', label: 'Наличные' },
  ];
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState("");

  return (
    <div>
      <h2 className="text-3xl m-8 p-8 font-bold ">Корзина</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 mx-14">
          <CartItems />
        </div>
        
        <div className="h-24"></div>
      </div>
    </div>
  );
}
