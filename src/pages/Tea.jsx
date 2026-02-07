import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Tea() {
  return (
    <>
      <Header/>

       {/* <!-- Page Header Start --> */}
    <div
      className="container-fluid about-bg tea-header  pb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center pt-5">
        <div className="bannerHeadingImg"></div>
        <h1
          className="display-4 crumText fst-italic about-text mb-4 animated slideInDown"
        >
          Our Tea
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item ">Home</li>
            <li className="breadcrumb-item textPrimary">Products</li>
            <li className="breadcrumb-item textPrimary" aria-current="page">Tea</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* <!-- Page Header End --> */}

    {/* <!-- Store Start --> */}
    <div className="container-fluid testimonial position-relative py-5">
      <img
        src="src/assets/images/wave-040.png"
        className="wavyTopImg"
        alt=""
        
      />

      <div className="container pt-2">
        <div
          className="section-title text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{maxWidth: "650px"}}
        >
          <img
            src="src/assets/images/tea-cup.webp"
            style={{height: "100px", width: "88px", marginBottom: "10px"}}
          />
          <p className="fs-3 fw-medium fst-italic textPrimary crumText">
            Our Premium Tea
          </p>
          <h1 className="display-6">A Cup of comfort and taste for every Day</h1>
          <p className="fs-5 fw-medium text-black-50 mb-2 mt-4">
            Our Tea delivers a rich aroma and smooth taste in every cup. A
            perfect blend of freshness and tradition, crafted for true tea
            lovers.
          </p>
        </div>

        <div className="row mt-5 mb-3 justify-content-center gap-5">
         <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
          <div className=" feature-img ">
            <a href="images/ken-tea2.webp" data-lightbox="portfolio"><img className="img-fluid rounded-3" src="src/assets/images/ken-tea2.webp"
              alt=""/></a>
          </div>
         </div>
         <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
          <div className=" feature-img ">
            <a href="images/ken-tea3.webp" data-lightbox="portfolio"><img className="img-fluid rounded-3" src="src/assets/images/ken-tea3.webp"
              alt=""/></a>
          </div>
         </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
          <div className=" feature-img ">
            <a href="images/ken-tea4.webp" data-lightbox="portfolio"><img className="img-fluid rounded-3" src="src/assets/images/ken-tea4.webp"
              alt=""/></a>
          </div>
         </div>
        </div>
      </div>

      <img
        src="src/assets/images/wave-40.png"
        className="wavyBottomImg"
        alt=""
        
      />
    </div>
    {/* <!-- Store End --> */}

      <Footer/>
    </>
  )
}
