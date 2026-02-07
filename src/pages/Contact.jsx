import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { IoIosMail, IoMdMail } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

export default function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "5124eabb-4231-4a87-af4e-c93dbf8f65ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };


  return (
    <>
     <Header/>

     {/* <!-- Page Header Start --> */}
  <div className="container-fluid about-bg page-header pb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
       <div className="bannerHeadingImg"></div>
      <h1 className="display-4 crumText fst-italic  about-text mb-4 animated slideInDown">Contact Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item textPrimary" aria-current="page">Contact Us</li>
        </ol>
      </nav>
    </div>
   
  </div>
  {/* <!-- Page Header End --> */}

    {/* <!-- Contact Start --> */}
    <div className="container-fluid contact position-relative pb-5 pt-2" style={{backgroundColor: "#8CE4FF"}}>
        <img src="/images/header-bg-4.png" alt="" className="pinkTopWavyImg" />
        <div className="container">
            <div className="section-title text-center mx-auto wow fadeInUp my-5" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <p className="fs-3 fw-medium fst-italic crumText text-white">Contact Us</p>
                <h1 className="display-6 text-dark">If You Have Any Query, Please Contact Us</h1>
            </div>
            <div className="row g-5 my-5">
                <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div className="btn-square mx-auto mb-3">
                       <IoIosMail className="fs-1 text-white" />
                    </div>
                    <p className="mb-2">info@tajmahal-foods.com</p>
                </div>
                <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                    <div className="btn-square mx-auto mb-3">
                        <BsWhatsapp className="fs-2 text-white" />
                    </div>
                   <a href="https://wa.me/923218663443" target="_blank">  <p className="mb-0 text-dark">+92 321 8663443</p> </a>
                   <a href="https://wa.me/923000657186" target="_blank">  <p className="mb-0 text-dark">+92 300 0657186</p> </a>
                   <a href="https://wa.me/923007616951" target="_blank">  <p className="mb-0 text-dark">+92 300 7616951</p> </a>
                </div>
                <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                    <div className="btn-square mx-auto mb-3">
                        <FaLocationDot className="fs-2 text-white" />
                    </div>
                    <p className="mb-1">Street 5, Dilawar Colony, Pull Abdullah</p>
                    <p className="mb-0">West Samundari Road Faisalabad Pakistan</p>
                </div>
            </div>
            <div className="row g-5 py-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h3 className="mb-4">Get In Touch</h3>
                    <p className="mb-4">Please fill in the form below to get in touch with us</p>
                    <form onSubmit={onSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name"/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone Number"/>
                                    <label htmlFor="phone">Your Phone Number</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave Link message here" name="message" id="message" style={{height: "120px"}}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-light rounded-pill fw-bold py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                         <span>{result}</span>
                    </form>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.116017193535!2d73.06230037468906!3d31.355777555257166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d0073475321%3A0xb4a13d0126f0e376!2sDilawar%20colony%20samundri%20Road%20Faisalabad!5e0!3m2!1sen!2s!4v1766745409425!5m2!1sen!2s" frameborder="0" style={{borderRadius: '10px' , height: '100%' , width: '100%' ,  minHeight: '300px', border: '0'}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <img src="/images/header-bg-04.png" alt="" className="pinkBottomWavyImg2"  />
    </div>
    {/* <!-- Contact End --> */}


     <Footer/> 
    </>
  )
}
