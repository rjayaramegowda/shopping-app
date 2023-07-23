import React from "react";
import IsFavoriteSM from "../IsFavoriteSM";

const CarouselPage = () => {
  return (
    <div className="col d-md-none mb-5 position-relative">
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
        data-bs-theme="light"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className=""
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/pic01.jpeg" className="img-fluid" />
          </div>
          <div className="carousel-item">
            <img src="images/pic02.jpeg" className="img-fluid" />
          </div>
          <div className="carousel-item">
            <img src="images/pic03.jpeg" className="img-fluid" />
          </div>
        </div>
      </div>

      <IsFavoriteSM />
    </div>
  );
};

export default CarouselPage;
