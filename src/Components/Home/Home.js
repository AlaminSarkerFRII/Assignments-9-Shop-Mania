import React from "react";
import "./Home.css";
import BakgroundImage from "../../assets/Images/Background.jpg";

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto mt-10">
      <div className="details-container">
        <h2 className="font-bold text-5xl uppercase">
          your technology !! <br /> <span>Your Choose</span>
        </h2>
        <p className="text-2xl w-full mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          veritatis obcaecati voluptatem quam quasi eligendi nesciunt
          perferendis dolores hic illum quo asperiores explicabo iste doloribus
          voluptatum, delectus labore, porro doloremque?
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
  );
};

export default Home;
