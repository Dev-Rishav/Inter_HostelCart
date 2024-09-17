import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import styles from "./Footer.module.css";
const Footer = () => 
{
  const aosDelay = "1100";  
  return (
    <footer 
    data-aos="fade-right"
    data-aos-delay={aosDelay}
    className="py-5">
     <div className={`${styles['foot']} row`}>
      <div className="col-6 col-md-2 mb-3">
       <h5>Important Links</h5>
        <ul className="nav flex-column">
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Chats</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Newsletter</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
       </div>

       <div className="col-6 col-md-2 mb-3">
       <h5>Category</h5>
        <ul className="nav flex-column">
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Women</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Men</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Electronics</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Accessories</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Computer and Office</a></li>
        </ul>
       </div>

       <div className="col-6 col-md-2 mb-3">
       <h5>Contact Us</h5>
        <ul className="nav flex-column">
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><FaTelegramPlane /> Manit,Bhopal</a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><FaMobileAlt /> 9123456789 </a></li>
         <ul className="list-unstyled d-flex">
         <li className="nav-item mb-2"><a href="#" className="nav-link p-1 text-body-secondary"><FaInstagram/> </a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-1 text-body-secondary"><FaFacebook /> </a></li>
         <li className="nav-item mb-2"><a href="#" className="nav-link p-1 text-body-secondary"><FaLinkedin /> </a></li>
         </ul>
        </ul>
       </div>

       <div className="col-md-5 offset-md-1 mb-3">
       <form>
         <h5>Subscribe to our page.</h5>
         <p>Monthly digest of what's new and exciting from us.</p>
         <div className="d-flex flex-column flex-sm-row w-100 gap-2">
           <label for="newsletter1" className="visually-hidden">Email address</label>
           <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="71tmra"/>
           <button className={`${styles['subscribebtn']} btn btn-primary`} type="button" fdprocessedid="a7lef">Subscribe <FaBell /></button>
         </div>
       </form>
       </div>
     </div>

     <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
     <pre> © 2024 Company, Inc. All rights reserved.</pre>
     </div>
    </footer>
  )
}
export default Footer;