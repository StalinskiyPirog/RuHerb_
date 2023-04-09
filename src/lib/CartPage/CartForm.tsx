import { getServerSideProps } from "@/pages/profile";

export default function CartForm(){
    return(
        <div className="col-span-1 m-4 p-4 lg:fixed lg:w-1/3 right-10">
        <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Способ доставки:
      </label>
    </div>
    <div id="inline-full-name" className="md:w-2/3">
   
      </div>
  </div>
        <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Способ оплаты: 
      </label>
    </div>
    <div id="inline-full-name" className="md:w-2/3">
 
       </div>
  </div>
        <div className="md:flex md:items-center mb-6">
    <button className="rounded-lg bg-green-500 p-4 flex m-auto text-white font-bold "  >Продолжить оплату</button>
  </div>
        </div>
    );
}

getServerSideProps