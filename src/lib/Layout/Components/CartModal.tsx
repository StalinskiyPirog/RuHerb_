// /* This example requires Tailwind CSS v2.0+ */
// import { Dispatch, Fragment, SetStateAction, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { AiOutlineClose } from 'react-icons/ai';
// import Image from "next/image";
// import {useCart} from "react-use-cart";
// import { useWishlist } from 'react-use-wishlist';


// interface CartModalProps{
//     open: boolean,
//     setOpen: Dispatch<SetStateAction<boolean>>
// }

// export default function CartModal({open, setOpen}:CartModalProps) {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     updateItemQuantity,
//     removeItem,
//     getItem,
//     addItem,
//     cartTotal 
//   } = useCart();
//   const {
//     addWishlistItem,
//     removeWishlistItem,
//     inWishlist
//   } = useWishlist();
//   function handler({id, title, price, image}) {
//     inWishlist(id)
//       ? setTimeout(removeWishlistItem(id), 500)
//       : setTimeout(
//           addWishlistItem({ id: id, title: title, price: price, image: image }),
//           500
//         );
//   }
//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
          
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
//                   <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                     <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
//                       <div className="flex items-start justify-between">
//                         <Dialog.Title className="text-lg font-medium text-gray-900">Корзина</Dialog.Title>
//                         <div className="ml-3 flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="-m-2 p-2 text-gray-400 hover:text-gray-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="sr-only">закрыть панель</span>
//                             <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
//                           </button>
//                         </div>
//                       </div>

//                       {isEmpty? <div className="text-xl p-4 m-4">К сожалению, в корзине ничего нет </div>:<div className="mt-8">
//                         <div className="flow-root">
//                           <ul role="list" className="-my-6 divide-y divide-gray-200">
//                             {items.map((product) => (
//                               <li key={product.id} className="flex py-6">
//                                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                   <div className="h-full  w-full object-center">
//                                   <img
//                                     src={product.src}
//                                   />
//                                   </div>
//                                 </div>

//                                 <div className="ml-4 flex flex-1 flex-col">
//                                   <div>
//                                     <div className="flex justify-between text-base font-medium text-gray-900">
//                                       <h3>
//                                         <a href='product/1'>{product.name}</a>
//                                       </h3>
//                                       <p className="ml-4">Цена: {product.price} руб</p>
//                                     </div>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-gray-500 font-bold">{product.category}</p>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-gray-500">Кол-во: {product.quantity}</p>

//                                     <div className="flex ">
                                      
//                                       <button
//           className={` relative bottom-0  right-0 rounded-lg m-4 p-4 text-green-700 transition-all hover:scale-110 focus:outline-none `+(inWishlist(product.id.toString())?"animate-pulse":"bg-green-200 border-green-400")}
//           type="button"
//           onClick={()=>handler({id: product.id.toString(), title: product.title, price: product.price, image: product.images[0]})}
//         >
//           <img
//             src={
//               inWishlist(product.id.toString())
//                 ? "/design_parts/heartActive.png"
//                 : "/design_parts/heart.png"
//             }
//           />
//         </button>
//         <div className=" ml-4 h-10 w-32">
//   <div className="flex border border-black flex-row h-10 w-full rounded-md relative mt-1">
//     <button onClick={() => updateItemQuantity(product.id.toString(), getItem(product.id.toString()).quantity - 1)}  className=" bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
//       <span className="m-auto text-2xl font-thin">−</span>
//     </button>
    
//     <input type="number" className=" text-center w-full border-white bg-white font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700  outline-none" value={getItem(product.id.toString()).quantity}></input>
//   <button onClick={() => {
//               addItem({
//                 id: product.id.toString(),
//                 name: product.name,
//                 price: product.price,
//                 src: product.src,
//                 category:product.category,
//               });
//             }} className="bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
//     <span className="m-auto text-2xl font-thin">+</span>
//   </button>
// </div></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>}
//                     </div>

//                     <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//                       <div className="flex justify-between text-base font-medium text-gray-900">
//                         <p>Подытог</p>
//                         <p>{cartTotal} Р</p>
//                       </div>
//                       <div className="mt-6">
//                         <a
//                           href="/order"
//                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                           Подтвердить
//                         </a>
//                       </div>
//                       <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                         <p>
//                           или{" "}
//                           <button
//                             type="button"
//                             className="font-medium text-indigo-600 hover:text-indigo-500"
//                             onClick={() =>{ setOpen(false);console.log(items)}}
//                           >
//                             Продолжить покупки
//                             <span aria-hidden="true"> &rarr;</span>
//                           </button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }
