
import { useState } from "react";

export const SiderDota = () => {
  const [active, setActive] = useState(0);
  const slides = [0, 1, 2, 3];
  return (
    <>
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            type="button"
            aria-label={`Go to slide: ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              active === index ? "bg-yellow-500 " : "bg-gray-500"
            }`}
            key={index}
            onClick={() => setActive(index)}
          ></button>
        ))}
      </div>
    </>
  );
};
