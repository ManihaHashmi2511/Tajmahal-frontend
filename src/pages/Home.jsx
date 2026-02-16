import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./About";
import Process from "./Process";
import TestimonialAndBelog from "./TestimonialAndBelog";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const openModal = (img) => {
    setActiveImg(img);
    setOpen(true);
  };

  return (
    <>
      <Header />

      <div
        className="container-fluid home-bg page-header wow fadeIn"
        data-wow-delay="0.1s"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/banner-b1.jpg"
          className="bg-video"
        >
          <source src="/video/0101.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <div className="container text-center d-flex justify-content-center flex-column align-items-center banner-content">
          <div className="bannerHeadingImg"></div>
          <h1 className="display-4 HeaderText crumText fst-italic about-text mb-4 animated slideInDown">
            Welcome
          </h1>
        </div>
      </div>

      <About />

      {/* <!-- Article Start --> */}
      <div className="container-fluid py-5  position-relative certificate">
        <img src="/images/header-bg-8.png" className="brownHeaderImg" alt="" />
        <div className="container pt-5 pb-3">
          <div className="row g-5 justify-content-between">
            <div
              className="col-lg-4 order-last wow  fadeIn"
              data-wow-delay="0.1s"
            >
              <div className=" feature-img d-flex justify-content-center flex-column align-items-center">
                <a>
                  <img
                    className="img-fluid ceo-img"
                    src="/images/ceo-img3.jpg"
                    alt=""
                  />
                </a>
                <h5 className="mt-4  text-dark">Haji Ehsan Ilahi (CEO)</h5>
              </div>
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="section-title">
                <p className="fs-2 fw-bold  crumText fst-italic textPrimary">
                  Leadership Message
                </p>
                <h2 className="display-6">
                  Guiding our journey with quality at heart
                </h2>
              </div>
              <p className="my-4 huninn">
                “From humble beginnings in the late nineties with a small tea
                venture, Tajmahal Foods has grown through honesty, hard work,
                and dedication. In 2010, we expanded into confectionery, and
                today both divisions thrive under one vision: to craft
                excellence with the finest raw materials
              </p>
              <p className="huninn">
                {" "}
                As we embrace modern technology, including ERP systems, our
                mission is not only to grow globally but to empower our people
                along the way. With innovation and integrity, we look forward to
                sharing the taste of Tajmahal Foods with the world.”
              </p>
              {/* <!-- <a href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</a> --> */}
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row g-5 justify-content-center align-items-center my-lg-2">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
              <div className="feature-img">
                <img
                  src="/images/certificate tajmahal_food.jpg"
                  className="img-fluid certificate-img"
                  alt="Certificate"
                  onClick={() =>
                    openModal("/images/certificate tajmahal_food.jpg")
                  }
                />

                <img
                  src="/images/(15).webp"
                  className="img-fluid hilal-img"
                  alt="Hilal"
                  onClick={() => openModal("/images/(15).webp")}
                />

                <img
                  src="/images/certificate_img_2.webp"
                  className="img-fluid certificate-img2"
                  alt="Third"
                  onClick={() => openModal("/images/certificate_img_2.webp")}
                />
              </div>

              {open && (
                <div className="modal-overlay" onClick={() => setOpen(false)}>
                  <img
                    src={activeImg}
                    className="modal-img"
                    alt="Large View"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
            <div
              className="col-lg-10  order-first text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="section-title">
                <p className="fs-2 fw-bold  crumText fst-italic textPrimary">
                  Certificate
                </p>
                <h1 className="display-6">Quality Assurance Certificate</h1>
              </div>
              <p className="my-4 huninn">
                Guided by our vision to elevate Pakistani confectionery to
                global standards, we continue to blend heritage with innovation,
                ensuring that each bite carries both authenticity and delight.
              </p>
              <p className="huninn">
                {" "}
                Whether enjoyed locally or abroad, Tajmahal Food stands as a
                symbol of trust, luxury, and unforgettable taste. Every product
                we craft reflects our commitment to uncompromising quality,
                ethical practices, and innovative excellence.
              </p>
              {/* <!-- <a href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</a> --> */}
            </div>
          </div>
        </div>
        <img src="/images/header-bg-2.png" className="whiteHeaderImg" alt="" />
      </div>
      {/* <!-- Article End --> */}

      <Process />
      <TestimonialAndBelog />
      <Footer />
    </>
  );
}
