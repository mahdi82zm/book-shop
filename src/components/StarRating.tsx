import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating?: number;
  onChange?: (value: number) => void;
  editable?: boolean;
}

export default function StarRating({
  rating = 0,
  onChange,
  editable = false,
}: StarRatingProps) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <>
      <div className="flex space-x-1  ">
        {[1, 2, 3, 4].map((star) => {
          const filled = star <= (hover ?? rating);
          return (
            <button
              key={star}
              type="button"
              aria-label={`Rate ${star} star`}
              className="focus:outline-none"
              onClick={() => editable && onChange?.(star)}
              onMouseEnter={() => editable && setHover(star)}
              onMouseLeave={() => editable && setHover(null)}
            >
              <FaStar
                className={
                  filled ? "text-yellow-400 w-6 h-6 " : "text-gray-300 w-6 h-6"
                }
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
