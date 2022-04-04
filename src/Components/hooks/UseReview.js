import { useEffect, useState } from "react";

const UseReview = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setReviewsData(data));
  }, [reviewsData]);

  return [reviewsData, setReviewsData];
};

export default UseReview;
