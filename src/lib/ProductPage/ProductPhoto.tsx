import { Carousel } from "flowbite-react";

interface PhotoBlockProps {
  images: Array<string>;
}

function LeftArrow() {
  return (
    <span className="flex pl-8 ">
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="37.5" cy="37.5" r="37.5" fill="white" />
        <path
          d="M42 23L29 37.2559L42 51.5118"
          stroke="#C17A0F"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
}
function RightArrow() {
  return (
    <span className="flex pr-8 ">
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="37.5" cy="37.5" r="37.5" fill="white" />
        <path
          d="M34 24L47.8109 38.2559L34 52.5118"
          stroke="#C17A0F"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
}

export function PhotoBlock({ images }: PhotoBlockProps) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[400px] sm:w-[450px] xl:w-[500px] ">
      <Carousel
        slideInterval={3000}
        leftControl={<LeftArrow />}
        rightControl={<RightArrow />}
      >
        {images.map((value: string, index: number) => (
          <img
            className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-56 sm:w-64 xl:w-80 2xl:w-96"
            src={value}
          />
        ))}
      </Carousel>
    </div>
  );
}
