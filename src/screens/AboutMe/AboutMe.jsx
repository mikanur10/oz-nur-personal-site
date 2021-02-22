import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AboutMe.css';
import Footer from '../../components/Footer/Footer';

function AboutMe(props) {
  return (
    <div >
      <NavBar />
      <div className="about-me">
        <h2 className='proj-name'>ABOUT ME</h2>

        <div className='about-me-container'>
          <section className="about-column about-column-a">
            <img alt='' className='profile-pic' src="https://i.imgur.com/mP4ZsBx.jpg" />
          </section>
          <section className="about-column">
            <p id='aboutme-text'>Osman Nur is an Associate at Revolution Growth. He joined the firm in 2019.
            Prior to joining Revolution, Osman was an Analyst in the Mergers & Acquisitions group at Bank of America Merrill Lynch. At BAML, Osman provided financial advice to large corporates and financial sponsors across a spectrum of strategic alternatives and announced $15bn in transaction value across various industries. Osman spent most of his time in the FinTech, MedTech, MediaTech and Renewables spaces.
            Osman graduated from the McIntire School of Commerce at the University of Virginia in 2016 with a B.A. in Commerce & Finance and was a full-tuition scholarship recipient. Osman was born in Arizona, raised in Northern Virginia, and has roots in Somalia.</p>

            <div className='details-button-container'>
              {/* <a className='details-button-containers resume-button' rel="noreferrer" target="_blank" href=''>RESUME</a> */}
              <br></br>
            </div>
          </section>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;