import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: "https://img.freepik.com/free-icon/menu-interface-symbol-four-horizontal-lines-with-dots_318-55795.jpg",
      title: "Lots of options",
      text: "You get a hell lot of options to choose from.",
    },
    {
      image: "https://icon-library.com/images/choose-icon/choose-icon-21.jpg",
      title: "Choose as per required",
      text: "Choose as many as you think are applicable. ",
    },
    {
      image: "https://www.shutterstock.com/image-vector/speed-icon-vector-fast-symbol-260nw-1424587328.jpg",
      title: "Fast Results",
      text: "Get your results shown instantaneously.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          You have to just select the symptoms out of the dropdown list and can also deselect them on clicking them back.
          Then you just need to submit.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
