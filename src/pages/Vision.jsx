import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <>
      <Header />

      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid about-bg page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <div className="bannerHeadingImg"></div>
          <h1 className="display-4 crumText fst-italic  about-text mb-4 animated slideInDown">
            Our Vision
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              {/* <!-- <li className="breadcrumb-item"><Link href="#">Pages</Link></li> --> */}
              <li className="breadcrumb-item textPrimary" aria-current="page">
                {" "}
                Vision
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <div className="container-fluid aboutBg pb-5 pt-3  position-relative">
        <img
          src="/images/wave-040.png"
          alt=""
          className="wavyTopImgVision"
        />
        <div className="container pb-3">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-12   section-title-div2  text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="section-title">
                <p className="fs-1 fw-bold  crumText fst-italic textPrimary">
                  Our Vision
                </p>
                <h1 className="display-6">
                  “Sweetening Lives with Tradition and Modernity”
                </h1>
              </div>
              <p className="mb-4 fs-5">
                Tajmahal Foods aims to blend Pakistan’s rich culinary heritage
                with modern innovation, delivering premium confections that
                bring lasting satisfaction to our customers worldwide.
              </p>

              <p className="fs-5">
                Guided by integrity and excellence, we’ll leverage cutting‑edge
                technology to serve both local and international markets.
              </p>
              {/* <!-- <Link href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</Link> --> */}
            </div>
          </div>
        </div>
        <img
          src="/images/header-bg-3.png"
          alt=""
          className="whiteHeaderImg"
        />
      </div>

      <Footer />
    </>
  );
}
