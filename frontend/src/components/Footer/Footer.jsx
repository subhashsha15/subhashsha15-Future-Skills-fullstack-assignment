import React from 'react'
import './Footer.css'
import { TbBrandAbstract } from "react-icons/tb";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-lists">
          <div className="footer-container-list">
            <h2>Abstract</h2>
            <span>Branches</span>
          </div>
          <div className="footer-container-list">
            <h2>Resources</h2>
            <span>Blog</span>
            <span>Help Center</span>
            <span>Release Notes</span>
            <span>Status</span>
          </div>
          <div className="footer-container-list">
            <h2>Community</h2>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
            <span>Dribbble</span>
            <span>Podcast</span>
          </div>
          <div className="footer-container-list">
            <h2>Company</h2>
            <span>About Us</span>
            <span>Careers</span>
            <span>Legal</span>
            <span className='footer-container-list-contact'>Contact Us</span>
            <span>info@abstract.com</span>
          </div>
          <div className="footer-container-list">
            <span className='footer-container-icon'>
              <TbBrandAbstract />
            </span>
            <span>
              <FaRegCopyright />&nbsp;Copyright 2022
              Abstract Studio Design, Inc.
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer