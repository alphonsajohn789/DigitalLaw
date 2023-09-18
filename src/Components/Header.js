import React, { Component } from "react";
// import ParticlesBg from "particles-bg";
//import Fade from "react-reveal";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import '../style/header_style.css';
class Header extends Component {
  render() {
    if (!this.props.data) return null;

    

    return (
      <header id="home">
       
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#/about">
                About
              </a>
            </li>

           

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>

            <li>
               <a  href='#/register'>
                Register
              </a> 

              
            </li>

            <li>
            <a  href='#/login'>
                Login
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
          <div style={{ width: '80vw'}}>
          <Carousel cols={4} rows={1} gap={5} loop>
            <Carousel.Item>
              <img className='carousel-image' src='./images/family_law.jpg' alt='Item 1'  />
             
              <a href='#/Natural' >Family Law </a> <br/>
              <a href='#/FamilyLaw' >View Details </a>
              
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel-image' src='./images/charity_law.png' alt='Item 3' />
              <a href='#/NatCharity' >Charity Law </a>  <br/>
              <a href='#/CharityLaw' >View Details </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel-image' src='./images/business_law.jpg' alt='Item 4' />
              <a href='#/NatBusiness' >Business Law </a>  <br/>
              <a href='#/Business' >View Details </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel-image' src='./images/criminal_law.jpg' alt='Item 5' />
              <a href='#/NatCriminal' >Criminal Law </a> <br/>
              <a href='#/Criminal' >View Details </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel-image' src='./images/human_rights.webp' alt='Item 6' />
              <a href='#/NatHuman' >Human Rights Law </a> <br/>
              <a href='#/Human' >View Details </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel-image' src='./images/property_law.jpg' alt='Item 7' />
              <a href='#/NatIntellectual' >Intellectual Property Law </a> <br/>
              <a href='#/Intellectual' >View Details </a>
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel-image' src='./images/civil_law.jpg' alt='Item 2' />
             <br /> <a href='#/NatCivil' >Civil Litigation Dispute Resolution Law </a>  <br/>
              <a href='#/Civil' >View Details </a>
            </Carousel.Item>
          </Carousel>
        </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
