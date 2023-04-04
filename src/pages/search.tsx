import Banner from "@/lib/MainPage/Banner";
import CarouselWishlist from "@/lib/MainPage/CarouselWishlist";
import CategoryMenu from "@/lib/MainPage/CategoryMenu";
import { IndexPageSkeleton } from "@/lib/MainPage/IndexPageSkeleton";
import FilterBlock from "@/lib/SearchPage/Filter";
import { SkeletonSearchPage } from "@/lib/SearchPage/SkeletonSearchPage";
import { Pagination } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function SearchPage() {
  

  const [data, setData] = useState(JSON);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  
  const { category1, category2, p } = router.query;
  const query = router.query;
  let page = p? +p : 1;
  const [currPage,setcurrPage]= useState(page);
  useEffect(() => {
    fetch("/api/search-data")
      .then(async (res) => {
        setData(await res.json());
        setLoading(false);
      });
  }, []);
  function onPageChange(n: number){
    setcurrPage(n)
  }

  if (isLoading){
      return <SkeletonSearchPage />
  } else return(<>
  <section>

<div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
   
    <FilterBlock />
    <div className="lg:col-span-3">
      <div className=" sm:flex items-center justify-between">
        <p className="text-sm text-gray-500">
          <span className="hidden sm:inline">Showing</span>6 of 24
          Products
        </p>

        <div className="ml-4">
          <label htmlFor="SortBy" className="sr-only">
            Сортировать
          </label>

          <select
            id="SortBy"
            className="text-sm border-gray-100 rounded"
          >
            <option >Сортировать</option>
            <option value="title-asc">Название, А-Я</option>
            <option value="title-desc">Название, Я-А</option>
            <option value="price-asc">Цена, начиная с дешевых</option>
            <option value="price-desc">Цена, начиная с дорогих</option>
          </select>
        </div>
      </div>

      <div className="mt-4 bg-gray-200 border border-gray-200 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"></div>
        {0 == 0 ? <div
className="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
role="alert"
>
<strong className="text-sm font-medium">Похоже, что ничего не было найдено</strong>


</div>:<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  
{/* {products.list.map((item)=><ProductCard key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} category={item.category} src={item.images[0]}/>)}
     */}

</div>}

    </div>
    
  </div>
  <div className="flex items-center justify-center text-center">
  <Pagination
    currentPage={currPage}
    layout="pagination"
    onPageChange={onPageChange}
    showIcons={true}
    totalPages={1000}
    previousLabel="Предыдущее"
    nextLabel="Следующее"
  />
</div>
  <div className="flex items-center justify-center text-center">
  Текущая страница: {currPage}
</div>
</div>
</section>
  </>)

  
}

