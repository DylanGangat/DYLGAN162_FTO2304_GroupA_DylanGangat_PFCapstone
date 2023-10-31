import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ cards, handleGenreFilter, error }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlideToShow] = useState(4);

  const carouselCards = cards.slice(12, 40);

  // Function to update the number of slides to show based on screen width

  const updateSlidesToShow = () => {
    setCurrentSlide(0);
    if (window.innerWidth > 1156) {
      setSlideToShow(4);
    } else if (window.innerWidth > 868) {
      setSlideToShow(3);
    } else if (window.innerWidth > 600) {
      setSlideToShow(2);
    } else {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    // Set initial number of slides to show
    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToShow);
    }
  };

  const nextSlide = () => {
    if (currentSlide < carouselCards.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToShow);
    }
  };

  return (
    <div className="w-full py-8">
      <h2 className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-center font-heading text-xl font-bold text-transparent">
        You might be interested in these
      </h2>

      <div className="flex min-h-carousel justify-center gap-6 overflow-x-hidden pt-8 transition-transform duration-300 ease-in-out">
        {carouselCards
          .slice(currentSlide, currentSlide + slidesToShow)
          .map((card) => (
            <CarouselCard
              key={card.id}
              card={card}
              handleGenreFilter={handleGenreFilter}
            />
          ))}

        {error && <h2 className="mx-auto mt-8 py-8">Error: {error} :(</h2>}
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
            currentSlide >= carouselCards.length - slidesToShow
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
