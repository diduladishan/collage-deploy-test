import image1 from "../../assets/image01.png"
import image10 from "../../assets/image01.png"
import image2 from "../../assets/image02.png"
import image3 from "../../assets/image03.png"
import image4 from "../../assets/image04.png"
import image5 from "../../assets/image05.png"
import image6 from "../../assets/image06.png"
import image7 from "../../assets/image07.png"
import image8 from "../../assets/image08.png"
import image9 from "../../assets/image09.png"
import React, { useRef } from "react"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

// Define the type for the props
interface ImageSelectorProps {
  onImageSelect: (image: string) => void
}

// Array of image imports
const images: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
]

const ImageSelector: React.FC<ImageSelectorProps> = ({ onImageSelect }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const handleNext = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const handleSelect = (image: string) => {
    onImageSelect(image)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="size-7 md:size-8 lg:size-9 xl:size-10 2xl:size-12 absolute left-0 top-1/2 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-gray-800 text-sm text-white md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        <FaAngleLeft />
      </button>
      <div
        ref={carouselRef}
        className="no-scrollbar flex w-full overflow-hidden"
      >
        <div className="flex">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Meme ${index}`}
              className="mr-2.5 h-auto w-[calc(33%-6px)] flex-shrink-0 cursor-pointer rounded-md border-[3px] border-gray-300 sm:w-[calc(33%-6px)] md:w-[calc(16.2%-6px)] lg:w-[calc(14%-7px)] lg:border-4 xl:w-[calc(12.5%-10px)] 2xl:w-[calc(12.5%-10px)]"
              onClick={() => handleSelect(image)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="size-7 md:size-8 lg:size-9 xl:size-10 2xl:size-12 absolute right-0 top-1/2 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-gray-800 text-sm text-white md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        <FaAngleRight />
      </button>
    </div>
  )
}

export default ImageSelector
