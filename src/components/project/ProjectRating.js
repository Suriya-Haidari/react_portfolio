import React, { useState, useEffect } from "react";

// By default no start is active

const Rating = ({ projectId }) => {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  // By clicking on each start the star will bacome active
  // By clicking again on each star thet will become inactive

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${projectId}`);
    if (storedRating) {
      setRating(Number(storedRating));
      setIsRated(true);
    } else {
      setRating(0);
      setIsRated(false);
    }
  }, [projectId]);

  // The average rate is saved and don't become inactive by refreshing the page

  const handleRatingChange = (newRating) => {
    if (!isRated || newRating !== rating) {
      setRating(newRating);
      setIsRated(true);
      localStorage.setItem(`rating-${projectId}`, newRating.toString());
    } else {
      setRating(0);
      setIsRated(false);
      localStorage.removeItem(`rating-${projectId}`);
    }
  };

  // I insert 5 start to rating my projects

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`rating__star ${
            isRated && value <= rating ? "active" : ""
          }`}
          onClick={() => handleRatingChange(value)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
