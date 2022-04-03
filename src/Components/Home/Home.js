import React, { useEffect, useState } from "react";
import "./Home.css";
import BakgroundImage from "../../assets/Images/Background.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //custer reviews data
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setReviewsData(data.slice(0, 3)));
  }, []);

  console.log(reviewsData);

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
        <div className="user-container py-10 flex items-center justify-center w-full mx-auto">
          {reviewsData.map((review) => (
            <p
              review={review}
              className="max-w-sm rounded overflow-hidden shadow-lg px-7 mx-10 "
            >
              <div className="text-center">
                <h2>{review.body}</h2>
                <div>
                  <img
                    className="text-center w-2/5 mx-auto rounded-full p-6"
                    src={review.thumbnail}
                    alt=""
                  />
                </div>
                <div className="font-semibold">
                  <p className=""> Name :{review.name}</p>
                  <p className="pb-10"> Title :{review.title}</p>
                </div>
              </div>
            </p>
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
