import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
// import Arrow from '../../assets/arrow.png';
import NavBar from '../../components/NavBar/NavBar';
import WordCarousel from '../../components/WordAnimation/WordAnimation';

function Home(props) {
  return (
    <div>
      <header id="header">
        <NavBar />
        <div className="homepage-title">
          <h1 id="homepage-title">OZ NUR</h1>
          <h2 id="homepage-subtitle">A CURIOUS EAST AFRICAN</h2>
        </div>
        <div className="header-carousel-container">
          <WordCarousel />
        </div>
        <hr className="page-break"></hr>
        <div className="explore-container">
          {/* <h3>EXPLORE WORK</h3> */}
          {/* <Link to="/portfolio"> <button className="explore-button"><img src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg" alt="arrow" /></button></Link> */}
        </div>
      </header>
    </div>
  );
}

export default Home;