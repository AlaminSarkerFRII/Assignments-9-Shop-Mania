import React, { useEffect, useState } from "react";

const UseReview = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setReviewsData(data));
  }, []);

  return (
    <div>
      <h2>custom hooks</h2>
    </div>
  );
};

export default UseReview;
