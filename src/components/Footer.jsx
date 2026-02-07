import React from 'react'
import { FaFacebookF, FaInstagram, FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { BiSolidContact } from 'react-icons/bi';
import logo from '../assets/images/Tajmahal logo.png';


export default function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
  <div className="container-fluid  position-relative footer  pt-5 wow fadeIn" style={{backgroundColor: '#0A1424'}}>
    <div className="container py-5">
      <div className="row g-5">

        <div className="col-lg-3 col-md-6 newsletterDiv position-relative">
          <div>
            <img src={logo} className='img-fluid mb-3' style={{height:'123px'}} />
            <p className='my-2'>Tajmahal Foods is dedicated to delivering authentic, high-quality confectionery made with passion and purity.</p>
          </div>
           <div className="d-flex gap-2 mt-2 pt-3 socialIconsDiv">
             
            <Link className="socialIcons rounded-circle me-2" href=""><FaFacebookF className=' fs-5' /></Link>
            <Link className="socialIcons rounded-circle me-2" href=""><FaInstagram className=' fs-5' /></Link>
            <Link className="socialIcons rounded-circle me-2" href=""><FaWhatsapp className=' fs-5' /></Link>

          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="textPrimary mb-4">Our Office</h4>
          <p className="mb-2">
           <FaLocationDot className='textPrimary fs-5 me-2' />
            Street 5, Dilawar Colony, Pull Abdullah West Samundari Road,
            Faisalabad
          </p>
          <p className="mb-2">
            <FaPhone className='textPrimary fs-6 me-2' />
            +92 41-2663443
          </p>
          <p className="mb-2">
            <FaPhone className='textPrimary fs-6 me-2' />
            +92 41-2666443
          </p>
          <p className="mb-2">
            <FaPhone className='textPrimary fs-6 me-2' />
            +92 321 2666443
          </p>
          <p className="mb-2">
            <MdEmail className='textPrimary fs-5 me-2' />
            info@tajmahal-foods.com
          </p>
         
        </div>
        <div className="col-lg-3 col-md-6 footerlinksDiv">
          <h4 className="textPrimary mb-4">Quick Links</h4>
          <Link className="footerlinks" to="/contact"><h5>Contact Us</h5></Link>
          <Link className="footerlinks" to="/products"><h5>Our Products</h5></Link>
          <Link className="footerlinks" to="/vision"><h5>Vision</h5></Link>
          <Link className="footerlinks" to="/mission"><h5>Mission</h5></Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="textPrimary mb-4">Business Hours</h4>
          <p className="mb-2 fs-5"><IoIosTime className='textPrimary fs-4 me-2' /> Monday - Friday</p>
          <p className="text-white-50 fs-5">09:00 am - 07:00 pm</p>
          <p className="mb-2 fs-5"><BiSolidContact className='textPrimary fs-4 me-2' />Marketing Contacts:</p>
          <p className="mb-1">
           <FaWhatsapp className='textPrimary fs-5 me-2' />
           +92 300 0657186
          </p>
          <p className="mb-1">
           <FaWhatsapp className='textPrimary fs-5 me-2' />
           +92 300 7616951
          </p>

        </div>
        
      </div>
    </div>

  </div>
  {/* <!-- Footer End --> */}

  {/* <!-- Copyright Start --> */}
  <div className="container-fluid position-relative copyright  py-4">

    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <h6 style={{color: 'gray'}}>
            &copy; <a className="fw-medium " style={{color: '#8CE4FF', textDecoration: 'none'}} href="#">Tajmahal Foods</a>| 2026 All Right
            Reserved.
          </h6>

        </div>
        <div className="col-md-6 text-center text-md-end">
          Designed By
          <a className="fw-medium text-white" style={{textDecoration: 'none'}} target="_blank" href="https://webpalm.ie">Webpalm</a>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Copyright End --> */}
    </>
  )
}
