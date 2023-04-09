import { Item, useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";

interface FavouriteListProps{
items: Item[]
}
export default function FavouriteList({items}: FavouriteListProps){
    const {inCart, getItem, updateItemQuantity, addItem} = useCart();
    const { addWishlistItem,
        removeWishlistItem,
        inWishlist,
        isWishlistEmpty} = useWishlist();
   
          function handler(id: string, name: string, price: string) {
            inWishlist(id)
              ? setTimeout(() => removeWishlistItem(id), 500)
              : setTimeout(
                  () => addWishlistItem({ id: id, name: name, price: +price }),
                  500
                );
          }
    
    return(<>{items.map((product: Item) => (
        <li key={product.id} className="flex py-6">
          <input
            type="checkbox"
            className="flex justify-self-center rounded-md p-4 m-4 text-green-500"
            defaultChecked
          />
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <div className="h-full relative w-full object-center">
              <img src={product.src} />
            </div>
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a href="product/1">{product.name}</a>
                </h3>
                <p className="ml-4">Цена: {product.price} руб</p>
                <div className=" ml-4 h-10 w-32">
                  <div className="flex border border-black flex-row h-10 w-full rounded-md relative mt-1">
                    <button
                      onClick={() =>
                        inCart(product.id.toString())
                          ? updateItemQuantity(
                              product.id.toString(),
                              getItem(product.id.toString())
                                .quantity - 1
                            )
                          : null
                      }
                      className=" bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">
                        −
                      </span>
                    </button>

                    <input
                      type="number"
                      className=" text-center w-full border-white bg-white font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700  outline-none"
                      value={
                        inCart(product.id.toString())
                          ? getItem(product.id.toString()).quantity
                          : "0"
                      }
                    ></input>
                    <button
                      onClick={() => {
                        addItem({
                          id: product.id.toString(),
                          name: product.name,
                          price: product.price,
                          src: product.src,
                          category: product.category,
                        });
                      }}
                      className="bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">
                        +
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <p className="text-gray-500 font-bold">
                {product.category}
              </p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <div className="flex ">
                <button
                  className={
                    ` relative bottom-0  right-0 rounded-lg m-4 p-4 text-green-700 transition-all hover:scale-110 focus:outline-none ` +
                    (inWishlist(product.id.toString())
                      ? "animate-pulse"
                      : "bg-green-200 border-green-400")
                  }
                  type="button"
                  onClick={() =>
                    handler(
                      product.id.toString(),
                      product.name,
                      product.price.toString()
                    )
                  }
                >
                  <img
                    src={
                      inWishlist(product.id.toString())
                        ? "/design_parts/heartActive.png"
                        : "/design_parts/heart.png"
                    }
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    removeWishlistItem(product.id.toString());
                  }}
                  className="font-medium p-1 m-1 text-indigo-600 hover:text-indigo-500"
                >
                  убрать
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}</>);
}