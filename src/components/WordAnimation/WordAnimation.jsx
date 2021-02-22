import React from 'react';
import './WordAnimation.css';

function WordAnimation(props) {
  return (
    <div>
      <h4 className="wordCarousel">
        {/* <span>A LITTLE ABOUT ME:</span> */}
        <div className="animation-div">
          <ul className="flip4">
            <li>EARLY STAGE INVESTOR</li>
            <li>FIRST GENERATION IMMIGRANT</li>
            <li>KNOWLEDGE SEEKER</li>
            {/* <li>SOM</li> */}
          </ul>
        </div>
      </h4>
    </div>
  );
}

export default WordAnimation;