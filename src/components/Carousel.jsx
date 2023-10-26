import { useState } from "react";
import CarouselCard from "./CarouselCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ cards, handleGenreFilter }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SLIDES_TO_SHOW = 4;
  const carouselCards = cards.slice(12, 40);

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 4);
    }
  };

  const nextSlide = () => {
    if (currentSlide < carouselCards.length - SLIDES_TO_SHOW) {
      setCurrentSlide(currentSlide + 4);
    }
  };

  return (
    <div className="w-full py-8">
      <h1
       
        className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading text-xl text-center font-bold text-transparent"
      >
        You might be interested in these
      </h1>

      <div className="min-h-carousel flex gap-6 overflow-x-hidden transition-transform duration-300 ease-in-out pt-8">
        {carouselCards
          .slice(currentSlide, currentSlide + SLIDES_TO_SHOW)
          .map((card) => (
            <CarouselCard
              key={card.id}
              card={card}
              handleGenreFilter={handleGenreFilter}
            />
          ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={previousSlide}
          className={`${
            currentSlide === 0 ? "invisible" : ""
          } cursor-pointer rounded-lg bg-secondary px-4 py-2 transition duration-300 hover:bg-accent-500
           focus:bg-accent-500`}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#ffffff" }}
            size="lg"
          />
        </button>
        <button
          onClick={nextSlide}
          className={`${
            currentSlide >= carouselCards.length - SLIDES_TO_SHOW
              ? "invisible"
              : ""
          } cursor-pointer rounded-lg bg-secondary px-4 py-2 transition duration-300 hover:bg-accent-500
           focus:bg-accent-500`}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "#ffffff" }}
            size="lg"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
