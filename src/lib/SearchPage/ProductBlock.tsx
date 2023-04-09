interface ProductBlockProps {
  data: JSON;
}

export default function ProductBlock({ data }: ProductBlockProps) {
  if (Object.keys(data).length == 0) {
    return (
      <div
        className="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
        role="alert"
      >
        <strong className="text-sm font-medium">
          Похоже, что ничего не было найдено
        </strong>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        data
        {/* {products.list.map((item)=><ProductCard key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} category={item.category} src={item.images[0]}/>)}
         */}
      </div>
    );
  }
}
