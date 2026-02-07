import React from "react";

export default function Process() {
  return (
    <>
      <div
        className="container-fluid py-5 "
        style={{ backgroundColor: "#8CE4FF" }}
      >
        <div className="container-xxl py-5">
          <div
            className="section-title text-center mx-auto wow fadeInUp "
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-2 fw-bold text-dark  crumText fst-italic text-white">
              Our Process
            </p>
            <h1 className=" pb-3 text-dark">How We Work</h1>
          </div>
          <div className="row rotateBgImgRow">
            <div className="col-lg-3 col-md-4  rotateBgImg text-center">
              <div className=" bgImg position-relative">
                <div className="position-absolute top-50 d-flex justify-content-center start-50 translate-middle">
                  <h5 className=" text-dark rotateText text-center animated zoomIn ">
                    Product Development
                  </h5>
                </div>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className="text-dark  text-start candyIcon">
                    Process Improvement
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Quality Control
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Staff Trainings
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 rotateBgImg text-center">
              <div className=" bgImg position-relative">
                <div className="position-absolute top-50 d-flex justify-content-center start-50 translate-middle ">
                  <h5 className=" text-dark text-center animated zoomIn ">
                    Production Process
                  </h5>
                </div>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className="text-dark  text-start candyIcon">
                    Hygienic Processing
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Consistent Taste & Quality
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Modern Equipment
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 dontShow  rotateBgImg text-center">
              <div className=" bgImg position-relative">
                <div className="position-absolute top-50 d-flex justify-content-center start-50 translate-middle ">
                  <h5 className=" text-dark text-center animated zoomIn ">
                    Warehouse Processing
                  </h5>
                </div>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className="text-dark  text-start candyIcon">
                    Safe & Secure Packaging
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Hygiene Compliance
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Inventory Management
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4  d-flex flex-column justify-content-center align-items-center ">
              <div className=" bgImg position-relative">
                <div className="position-absolute top-50 d-flex justify-content-center start-50 translate-middle ">
                  <h5 className=" text-dark text-center animated zoomIn ">
                    Sales & Distribution
                  </h5>
                </div>
              </div>
              <div className="mt-4">
                <ul className="list-unstyled">
                  <li className="text-dark  text-start candyIcon">
                    Market Supply
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Retail & sale Distribution
                  </li>
                  <li className="text-dark  text-start candyIcon">
                    Brand Reach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
