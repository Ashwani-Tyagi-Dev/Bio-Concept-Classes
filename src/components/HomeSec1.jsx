import React from 'react'
import logoWhite from "../images/lW.png";
import headerImg from "../images/headerImg.png";
import TypingEffect from './TypingEffect';

const HomeSec1 = () => {
  return (
    <>
    <div className="header hs1">
      <div className="header-left">
        <div className="content1">
          <h2>Bio-Concept Classes</h2>
          <h3>Unlock Greatness, Excellence, Creativity.</h3>

          <div className="content1-p">
            <p>9th, 10th, 11th, 12th</p>
            <p>TGT, PGT, LT, GIC, NEET, NET</p>
          </div>
        </div>
        <div className="content2">
          <div className="content2Left">
            <img src={logoWhite} alt="" />
          </div>
        </div>
      </div>
      <img className="headerImg" src={headerImg} alt="" />
    </div>
    <div className="header-bottom">
      <div className="hbRight">
        <TypingEffect
          words={[
            "9th, 10th.",
            "11th, 12th.",
            "TGT, PGT, LT.",
            "GIC, NEET, NET.",
          ]}
        />
      </div>
      <div className="hbLeft">
        <div className="hbLeftInner">
          <h3 className="text-center">DIRECTOR</h3>
          <p className="text-center">Aarti Tyagi</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default HomeSec1