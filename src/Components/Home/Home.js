import React, { useEffect, useState } from "react";
import "./Home.css";
import BakgroundImage from "../../assets/Images/Background.jpg";
import { useNavigate } from "react-router-dom";
import useReview from "../hooks/useReview";
import { AiTwotoneStar } from "react-icons/ai";

const Home = () => {
  //custer reviews data
  const [reviewsData, setReviewsData] = useReview([]);

  // useEffect(() => {
  //   fetch("user.json")
  //     .then((res) => res.json())
  //     .then((data) => setReviewsData(data.slice(0, 3)));
  // }, []);

  // console.log(reviewsData);

  //customer reviews
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto mt-10">
        <div className="details-container">
          <h2 className="font-bold text-5xl uppercase">
            your technology !! <br /> <span>Your Choose</span>
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
        <div className="backg-images-container rounded">
          <img src={BakgroundImage} alt="" />
        </div>
      </div>
      <div className="customer-reviews text-center my-52">
        <h2 className="text-5xl uppercase hover:text-pink-700">
          Customer Reviews
        </h2>
        <div className="user-container flex items-center justify-center">
          {reviewsData.slice(0, 3).map((review) => (
            <div className="flex">
              <div className="rounded-lg shadow-lg bg-white max-w-sm mr-6 px-3 ">
                <img
                  className=" w-2/5 mx-auto rounded-full p-6"
                  src={review.thumbnail}
                  alt=""
                />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {review.name}
                  </h5>
                  <div className="flex justify-center mb-2 mx-auto">
                    <AiTwotoneStar className="text-warning" />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
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
