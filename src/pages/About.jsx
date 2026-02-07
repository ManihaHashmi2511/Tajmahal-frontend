import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* <!-- About Start --> */}
  <div class="container-fluid py-5 position-relative">
    {/* <img src="images/wave-040.png" class="wavyTopImg" alt="" /> */}
    <div class="container mx-auto aboutBg pt-4">
      <div class="row d-flex justify-content-center">

        <div class="col-lg-12  sectionTitleDiv text-center  wow fadeIn" data-wow-delay="0.5s">
          <div class="section-title my-3">
            <p class="fs-3 fw-bold  crumText fst-italic textPrimary">Our Journey</p>
            <h1 class="display-6 fw-bold mb-4">
              Our Success History of Tajmahal Foods in 15 years
            </h1>
          </div>
          <div class="row g-3 mb-4">
            <div class="col-sm-12">
              <h5>Tajmahal Food is one of the most popular sweet food in Pakistan</h5>
              <p class="mb-0">
                From the very beginning since 2010 in Punjab Faisalabad Pakistan, we believe confectionery is more than
                sweetness — it is heritage, craftsmanship, and joy. Our brand is built on four timeless pillars:
                <br/> Quality, Integrity, Innovation, and Customer Satisfaction.
              </p>
            </div>
          </div>
          <div class="border-top mb-4 text-center"></div>
          <div class="row g-3">
            <div class="col-sm-12">
              <h5>Our Food is made with love and the reflection of our Traditions</h5>
              <p class="mb-0">
                The honor of Tajmahal Foods is to bring Pakistan’s rich traditions to the world, embracing modern
                creativity, delivering world-class confections that delight customers everywhere.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
    <img src="/images/wave-40.png" class="wavyBottomImg" alt="" />
  </div>
  {/* <!-- About End --> */}

  {/* <!-- Brands Section --> */}
  <div class="container-fluid brands position-relative py-5" style={{backgroundColor: '#0D1728'}}>


    <div class="container pb-4">
      <div class="text-center wow section-title mx-auto" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
        <p class="fs-3 fw-bold textPrimary  crumText mt-2 fst-italic ">Our Brands</p>
        <h3 class=" text-white" style={{letterSpacing: '1.5px'}}>
          Powering Quality Brands Through Trust and Excellence
        </h3>
      </div>
      <div class="row mx-auto">
        <div class="brandImgDiv">


          <div class="brandImg" style={{width: '133px'}}>
            <Link to={'/besa-confectionary'}>
              <img class="img-fluid  wow fadeIn" data-wow-delay="0.1s" src="/images/brand-5.webp" alt="" />
            </Link>
          </div>


          <div class="brandImg" style={{width: '145px'}}>
            <Link to={'/sweetTime-confectionary'}>
               <img class="img-fluid  wow fadeIn" data-wow-delay="0.1s" src="/images/Sweetimes-logo.png" alt="" />
            </Link>
          </div>


          <div class="brandImg" style={{width: '145px'}}>
            <Link to={'/hlu-confectionary'}> 
              <img class="img-fluid  wow fadeIn" data-wow-delay="0.1s" src="/images/brand-7.webp" alt="" />
            </Link>
          </div>


          <div class="brandImg" style={{width: '150px'}}>
            <Link to={'/tajmahal-confectionary'}>
              <img class="img-fluid  wow fadeIn" data-wow-delay="0.2s" src="/images/brand-4.webp" alt="" />
            </Link>
          </div>

          <div class="brandImg" style={{width: '133px'}}>
            <Link to={'/tajmahal-tea'}>
              <img class="img-fluid  wow fadeIn" data-wow-delay="0.2s" src="/images/tea-logo.webp" alt="" />
            </Link>
          </div>

        </div>
      </div>
    </div>

  </div>
    </>
  )
}
