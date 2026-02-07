import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Mission() {
  return (
    <>
      <Header/>

    {/* <!-- Page Header Start --> */}
  <div class="container-fluid about-bg page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container text-center py-5">
       <div class="bannerHeadingImg"></div>
      <h1 class="display-4 crumText fst-italic  about-text mb-4 animated slideInDown">Our Mission</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          {/* <!-- <li class="breadcrumb-item"><Link href="#">Pages</Link></li> --> */}
          <li class="breadcrumb-item textPrimary" aria-current="page"> Mission</li>
        </ol>
      </nav>
    </div>
   
  </div>
  {/* <!-- Page Header End --> */}


  {/* <!-- Article Start --> */}
  <div class="container-fluid pb-5 pt-3 aboutBg position-relative">
    <img src="/images/wave-040.png" alt="" class="wavyTopImgVision" />
    <div class="container pb-3">
      <div class="row justify-content-center align-items-center my-3">
        
        <div class="col-lg-12 py-3  section-title-div2 wow fadeIn text-center" data-wow-delay="0.5s" >
          <div class="section-title">
            <p class="fs-1 fw-bold  crumText fst-italic textPrimary">Our Mission</p>
            <h1 class="display-6">“Honoring Tradition Through Excellence”</h1>
          </div>
          <p class="mb-4 fs-5">At Tajmahal Foods, our mission is to uphold our core values and prioritize customer satisfaction by consistently delivering products of the highest quality. </p>

          <p class="fs-5">We honor Pakistan’s rich heritage while embracing modern innovation, offering world‑class confectionery through uncompromising quality, integrity, and relentless focus on the customer. We aim to serve local markets extensively and solidify our presence in international markets.</p>
          {/* <!-- <Link href="" class="btn btn-primary rounded-pill py-3 px-5">Read More</Link> --> */}
        </div>
      </div>
    </div>
     <img src="/images/header-bg-3.png" alt="" class="whiteHeaderImg" />
  </div>
  {/* <!-- Article End --> */}

      <Footer/>
    </>
  )
}
