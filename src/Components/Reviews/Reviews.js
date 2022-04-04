import React from "react";
import UseReview from "../hooks/useReview";
import { AiTwotoneStar } from "react-icons/ai";

const Reviews = () => {
  // const { name, id, title, image } = props.review;

  const [reviewsData, setrRevieswDat] = UseReview();

  return (
    <div className="user-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 items-center justify-center  mt-10 mb-10">
      {reviewsData.map((review) => (
        <div className="flex ">
          <div className="rounded-lg shadow-lg bg-white max-w-sm mx-auto px-3 ">
            <img
              className=" w-2/5 mx-auto rounded-full p-6"
              src={review.thumbnail}
              alt=""
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl text-center font-bold mb-2">
                {review.name}
              </h5>
              <div className="flex justify-center items-center mb-2 mx-auto">
                <p>Ratting : </p>
                <AiTwotoneStar className="text-orange-500" />
                <AiTwotoneStar className="text-orange-500" />
                <AiTwotoneStar className="text-orange-500" />
                <AiTwotoneStar className="text-orange-200" />
              </div>
              <p className="text-gray-700 text-2xl mb-4"> {review.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
