import React, { useEffect, useState } from "react";
import "./Home.css";
import BakgroundImage from "../../assets/Images/bac-3.jpg";
import { useNavigate } from "react-router-dom";
import useReview from "../hooks/useReview";
import { AiTwotoneStar } from "react-icons/ai";

const Home = () => {
  //custer reviews data with custom hooks
  const [reviewsData, setReviewsData] = useReview([]);
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto mt-10">
        <div className="details-container">
          <h2 className="font-bold text-5xl uppercase hover:text-green-300">
            your technology !! <br />
            <span className="text-orange-600 py-3">Your Choose</span>
          </h2>
          <p className="text-2xl w-full mx-auto">
            Today, the presence of Information and Communication Technologies
            (ICT) has become a necessity. In this time, these technologies have
            altered the ways we communicate, work, learn and play. All these
            ways have been enhanced and these enhancement have had impacts, so
            that, now, the method in which affairs are conducted, the means by
            which organizations evolve and the ways in which relationships are
            established, have all become optimized. But here in Bangladesh we
            are far behind from the up to date touch of such technologies.
          </p>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 mt-5 rounded">
              Read More..
            </button>
          </div>
        </div>
        <div className="backg-images-container rounded-0">
          <img className="w-full h-4/5" src={BakgroundImage} alt="" />
        </div>
      </div>
      <div className="customer-reviews text-center my-52 w-full mx-auto">
        <h2 className="text-5xl uppercase hover:text-pink-700">
          Customer Reviews
        </h2>
        <div className="user-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-20 items-center justify-between mt-10">
          {reviewsData.slice(0, 3).map((review) => (
            <div className="flex">
              <div className="rounded-lg shadow-lg bg-white max-w-sm mx-auto px-3 ">
                <img
                  className=" mx-auto rounded-full p-6"
                  src={review.thumbnail}
                  alt=""
                />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {review.name}
                  </h5>
                  <div className="flex justify-center mb-2 mx-auto">
                    <AiTwotoneStar className="text-orange-500" />
                    <AiTwotoneStar className="text-orange-500" />
                    <AiTwotoneStar className="text-orange-500" />
                    <AiTwotoneStar className="text-orange-200" />
                  </div>
                  <p className="text-gray-700 text-base mb-4">
                    Feedback: {review.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={() => navigate("/reviews")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 mt-5 rounded"
          >
            See All Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
