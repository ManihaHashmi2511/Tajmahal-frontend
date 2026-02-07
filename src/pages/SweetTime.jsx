import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductTabSection from '../components/ProductTabSection'
import { Link } from 'react-router-dom'

export default function SweetTime() {
  return (
     <>
        <Header/>
    
         {/* <!-- Page Header Start --> */}
        <div
          className="container-fluid about-bg page-header pb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container text-center pt-5">
            <div className="bannerHeadingImg"></div>
            <h1 className="crumText fst-italic about-text mb-4 animated slideInDown">
              Our Products
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                <li className="breadcrumb-item textPrimary" aria-current="page">
                  <Link to={'/products'}>Products</Link>
                </li>
                <li className="breadcrumb-item textPrimary" aria-current="page">
                  <Link to={'/besa-confectionary'}>Sweet Time's Confectionery</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* <!-- Page Header End --> */}
        
        <ProductTabSection brand="Sweet Times" enablePagination={false}/>
        <Footer/>  
      </>
  )
}
