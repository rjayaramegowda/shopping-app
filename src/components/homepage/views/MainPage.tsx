import React from "react";
import CarouselPage from "./CarouselPage";
import IsFavoriteSM from "../IsFavoriteSM";
import ColorGuide from "../ColorGuide";
import SizeGuide from "../SizeGuide";

const MainPage = () => {
  return (
    <div className="row bg-light">
      <section className="col-12 my-3" style={{ position: "relative" }}>
        <div className="row">
          <div className="col-md-4 order-last order-md-first">
            <div className="md-sticky-snav">
              <ul className="tab1 nav text-uppercase mb-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    details
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    delivry
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    fit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    share
                  </a>
                </li>
              </ul>
              <p>
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
                lunar lavishness by night and by day: a blazer in a linen blend
                shot with lurex for a shimmering surface that shines like a star
                in the sky. it has a straight fit with well defined shoulders
                and a shawl collar culminating in a button and has been
                flawlessly finished with three jet pockets with a sartorial
                feel.
              </p>
            </div>
          </div>
          <CarouselPage />
          <div className="col-md-4 d-none d-md-block position-relative">
            <img src="images/pic01.jpeg" className="img-fluid" />
            <img src="images/pic02.jpeg" className="img-fluid mt-2" />
            <img src="images/pic03.jpeg" className="img-fluid mt-2" />
            <IsFavoriteSM />
          </div>
          <div className="col-md-4">
            <div className="md-sticky-snav">
              <h1>JONATHAN SIMKHAI</h1>
              <p>Lurex Linen Viscose Jacket in Conchiglia</p>
              <p>
                <strong>$225</strong>
              </p>
              <ColorGuide />
              <SizeGuide />
              <div className="d-grid gap-2">
                <button className="btn btn-dark text-uppercase my-2 ">
                  add to bag
                </button>
              </div>
              <p className="py-3">
                Get 4 interest-free payments of $196.25 with Klarna
                <a href="#" className="btn btn-light">
                  {" "}
                  LEARN MORE
                </a>
              </p>
              <p>
                Speak to a Personal Stylist{" "}
                <a href="#" className="btn btn-light">
                  CHAT NOW
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="row" style={{ marginBottom: 500 }}>
        <div className="col-md-4 offset-md-4 text-center">
          <div className=" my-5 text-uppercase">
            <a href="#" className="btn btn-link">
              {" "}
              Jonathan Simkhai
            </a>
            <a href="#" className="btn btn-link">
              {" "}
              Blazers
            </a>
            <a href="#" className="btn btn-link">
              {" "}
              Viscose
            </a>
          </div>
          <h6 className="text-uppercase" style={{ marginTop: 100 }}>
            a note from the editor
          </h6>
          <h2 className="py-2">
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
            lunar lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the
            sky.
          </h2>
          <p>
            {" "}
            <span style={{ letterSpacing: "-2px" }}>------ </span> By{" "}
            <a href="#" className="btn btn-link">
              MINNA SHIM,
            </a>{" "}
            Fashion Editor
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
