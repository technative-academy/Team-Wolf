import { useState } from "react";
// import  "./StarRating.css";
import styles from "./StarRating.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={`${styles.star} ${styles.fs - 2}`}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
