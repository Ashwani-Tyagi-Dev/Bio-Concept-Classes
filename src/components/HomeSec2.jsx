import React from 'react'
import study from "../images/study.jpeg";

const HomeSec2 = () => {
  return (
    <div className="homeSec2">
      <section className="a-section">
        <div className="a-section-marquee-box">
          <h2 className="marquee-text">
            9 • 10 • 11 • 12 • TGT • PGT • LT • GIC • NEET • NET •
          </h2>
          <h2 className="marquee-text">
            9 • 10 • 11 • 12 • TGT • PGT • LT • GIC • NEET • NET •
          </h2>
        </div>
      </section>

      <div className="hs2HeaderImg">
        <img src={study} alt="" />
      </div>
      <section className="b-section">
        <div className="b-section-marquee-box">
          <h2 className="marquee-text">
            9 • 10 • 11 • 12 • TGT • PGT • LT • GIC • NEET • NET •
          </h2>
          <h2 className="marquee-text">
            9 • 10 • 11 • 12 • TGT • PGT • LT • GIC • NEET • NET •
          </h2>
        </div>
      </section>
    </div>
  )
}

export default HomeSec2