import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductTabSection from "../components/ProductTabSection";

export default function Products() {
  return (
    <>
      <Header />
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid about-bg page-header pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5">
          <div className="bannerHeadingImg"></div>
          <h1 className="display-4 crumText fst-italic  about-text mb-4 animated slideInDown">
            Products
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item textPrimary" aria-current="page">
                Products
              </li>
              <li className="breadcrumb-item textPrimary" aria-current="page">
                <Link to="/products">Our Confectionery</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Brands Section --> */}
      <div
        className="container-fluid  position-relative py-5"
        style={{ backgroundColor: "#8CE4FF" }}
      >
        <img
          src="/images/wave-19.png"
          alt=""
          className="pinkTopWavyImg"
        />

        <div className="container pb-4">
          <div
            className="text-center wow section-title mx-auto"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <p className="fs-3 fw-bold text-black  crumText mt-2 fst-italic ">
              Choose Your Favourite
            </p>
            <h2
              className=" text-white mb-2"
              style={{ letterSpacing: "1.5px", lineHeight: "35px" }}
            >
              You Can Choose
              <br /> <span className="text-dark">from a wide range</span>
            </h2>
          </div>

          <div className="row mx-auto mt-3">
            <div className=" brandImgDiv">
              <div
                className="brandImgSec  text-center brands-items"
                style={{ width: "145px" }}
              >
                <Link to={"/besa-confectionary"}>
                  <img
                    className="img-fluid  wow fadeIn"
                    data-wow-delay="0.1s"
                    src="/images/brand-01.webp"
                    alt=""
                  />
                </Link>

                <Link className="btn" to={"/besa-confectionary"}>
                  Show More
                </Link>
              </div>

              <div
                className="brandImgSec  text-center brands-items"
                style={{ width: "150px" }}
              >
                <Link to={"/tajmahal-confectionary"}>
                  <img
                    className="img-fluid mb-3 wow fadeIn"
                    data-wow-delay="0.2s"
                    src="/images/brand-4.webp"
                    alt=""
                  />
                </Link>

                <Link className="btn" to={"/tajmahal-confectionary"}>
                  Show More
                </Link>
              </div>

              <div
                className="brandImgSec  text-center brands-items"
                style={{ width: "145px" }}
              >
                <Link to={"/hlu-confectionary"}>
                  <img
                    className="img-fluid  wow fadeIn"
                    data-wow-delay="0.1s"
                    src="/images/brand-7.webp"
                    alt=""
                  />
                </Link>

                <Link className="btn" to={"/hlu-confectionary"}>
                  Show More
                </Link>
              </div>
              <div
                className="brandImgSec text-center brands-items"
                style={{ width: "145px" }}
              >
                <Link to={"/sweetTime-confectionary"}>
                  <img
                    className="img-fluid mb-3  wow fadeIn"
                    data-wow-delay="0.1s"
                    src="/images/Sweetimes-logo.png"
                    alt=""
                  />
                </Link>

                <Link className="btn" to={"/sweetTime-confectionary"}>
                  Show More
                </Link>
              </div>
              <div
                className="brandImgSec text-center brands-items"
                style={{ width: "145px" }}
              >
                <Link to={"/tajmahal-tea"}>
                  <img
                    className="img-fluid mb-3  wow fadeIn"
                    data-wow-delay="0.1s"
                    src="/images/tea-logo.webp"
                    alt=""
                  />
                </Link>

                <Link className="btn" to={"/tajmahal-tea"}>
                  Show More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductTabSection enablePagination={true} />

      {/* <!-- Store Start --> */}
      <div
        className="container-fluid products position-relative pb-5 "
        style={{paddingTop: "100px"}}
      >
        <div className="container-xxl py-3 ">
          <div className="container">
            <div
              className="section-title text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{maxWidth: "600px"}}
            >
              <img src="/images/can-9.png" style={{height: "102px", width: "70px"}} alt="" />
              <p className="fs-3 fw-bold  crumText fst-italic textPrimary mt-2">
                Our Products
              </p>
              <h1 className="display-6 text-white">
                From Pakistan to the World, One Sweet at a Time
              </h1>
            </div>
            <div className="row mt-5">
              <div
                className="col-lg-4 productImg col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="store-item position-relative text-center">
                  <img
                    className="img-fluid"
                    src="/tajmahal-img/taj-chew (5).webp"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                    </div>
                    <h4 className="mb-3 textPrimary">Zumba Chew Bar</h4>
                    <p className="text-white">
                      Zumba Chew Bar is a delightful treat for your taste buds.
                      We offer a wide range of this.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 productImg col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="store-item position-relative text-center">
                  <img
                    className="img-fluid"
                    src="/taj-besa/besa-choco-you&me.webp"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                    </div>
                    <h4 className="mb-3 textPrimary">Daily Choco</h4>
                    <p className="text-white">
                      Daily Choco is a delightful treat for your taste buds. We
                      offer a wide range of this.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 productImg col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="store-item position-relative text-center">
                  <img
                    className="img-fluid"
                    src="/taj-besa/besa-lolly-coca.webp"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                    </div>
                    <h4 className="mb-3 textPrimary">Colla Lollipop</h4>
                    <p className="text-white">
                      Colla Lollipop is a delightful treat for your taste buds.
                      We offer a wide range of this.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2 justify-content-evenly">
              <div
                className="col-lg-3 productImg col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="store-item position-relative text-center">
                  <img
                    className="img-fluid"
                    src="/taj-besa/besa-candy-eclairs.webp"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                    </div>
                    <h4 className="mb-3 textPrimary">Eclair Candy</h4>
                    <p className="text-white">
                      Eclair Candy is a delightful treat for your taste buds. We
                      offer a wide range of this.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 productImg col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="store-item position-relative text-center">
                  <img
                    className="img-fluid"
                    src="/taj-sweetime/sweetimes-chew-jolly.webp"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                    </div>
                    <h4 className="mb-3 textPrimary">Jolly Chew Bar</h4>
                    <p className="text-white">
                      Jolly Chew Bar is a delightful treat for your taste buds.
                      We offer a wide range of this.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 productImg col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="store-item position-relative text-center">
                  <img
                    className="img-fluid"
                    src="/taj-besa/besa-lolly-jetpop.webp"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                      <small className="fa fa-star text-warning"></small>
                    </div>
                    <h4 className="mb-3 textPrimary">Lolly Jetpop</h4>
                    <p className="text-white">
                      Lolly Jetpop is a delightful treat for your taste buds. We
                      offer a wide range of this.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/header-bg-3.png"
          alt=""
          className="whiteHeaderImg"
        />
      </div>
      {/* <!-- Store End --> */}

      <Footer />
    </>
  );
}
