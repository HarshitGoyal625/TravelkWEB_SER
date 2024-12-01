import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to="/Home">
            <i className="fas fa-angle-right"></i>home
          </Link>
          <Link to="/About">
            <i className="fas fa-angle-right"></i>about
          </Link>
          <Link to="/Package">
            <i className="fas fa-angle-right"></i>package
          </Link>
          <Link to="/Book">
            <i className="fas fa-angle-right"></i>book
          </Link>
        </div>
        <div className="box">
          <h3>extra links</h3>
          <a href="#">
            <i className="fas fa-angle-right"></i>ask questions
          </a>
          <a href="#">
            <i className="fas fa-angle-right"></i>about us
          </a>
          <a href="#">
            <i className="fas fa-angle-right"></i>privacy policy
          </a>
          <a href="#">
            <i className="fas fa-angle-right"></i>terms of use
          </a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            <i className="fas fa-phone"></i>+91-9845488451
          </a>
          <a href="#">
            <i className="fas fa-phone"></i>0164-45678521
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i>harshit.goyal@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-map"></i>Solan, Himachal Pradesh(H.P.) - 173211
          </a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#">
            <i className="fab fa-facebook"></i>facebook
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>twitter
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>instagram
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>linkedin
          </a>
        </div>
      </div>
      <div className="credit">
        created by <span>Mr. Harshit Goyal</span> | all rights reserved!
      </div>
    </section>
  );
};

export default Footer;
