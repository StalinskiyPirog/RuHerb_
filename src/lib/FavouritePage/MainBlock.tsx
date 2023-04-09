import { useWishlist } from "react-use-wishlist";
import FavouriteList from "./Components/FavouriteList";

interface MainBlockFavPageProps {
  empty: boolean;
}

export default function MainBlockFavPage({ empty }: MainBlockFavPageProps) {
  if (empty) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Избранное</h2>

        <p className="mx-auto text-xl mt-4 text-gray-500">
          Похоже, что у вас ничего нет в избранном
        </p>

        <a
          href="/"
          className="group mt-8 flex items-center justify-between rounded-lg border border-green-600 px-5 py-3 text-green-600 hover:bg-green-600"
        >
          <span className="text-lg font-medium group-hover:text-white">
            Перейти на главную страницу
          </span>

          <span className="ml-4 flex-shrink-0 rounded-full border border-blue-600 bg-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </a>
      </div>
    );
  } else {
    const { items } = useWishlist();
    let itemsUnique = items;

    return (
      <>
        <div className="mt-8">
          <div className="flow-root">
            <ul
              role="list"
              className="-my-6 divide-y overflow-auto divide-gray-200"
            >
              <FavouriteList items={itemsUnique} />
            </ul>
          </div>
        </div>
      </>
    );
  }
}
