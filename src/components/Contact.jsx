import React from 'react'
import logo from "../images/lW.png";

const Contact = () => {
  return (
    <div className="contact">
    <div className="contactContainer">
      <div className="rightContact">
        <span>
          <h1>Contact</h1>
          <h1>Us</h1>
        </span>
        <div className="card">
          <section className="landscape-section">
            <div className="sky"></div>
            <div className="sun"></div>
            <div className="hill-1"></div>
            <div className="hill-2"></div>
            <div className="ocean">
              <div className="reflection"></div>
              <div className="reflection"></div>
              <div className="reflection"></div>
              <div className="reflection"></div>
              <div className="reflection"></div>
              <div className="shadow-hill-1"></div>
              <div className="shadow-hill-2"></div>
            </div>
            <div className="hill-3"></div>
            <div className="hill-4"></div>
            <div className="tree-1">
              <svg
                strokeWidth="0.00064"
                stroke="#b77873"
                fill="#b77873"
                viewBox="0 0 64.00 64.00"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.0"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                    fill="#b77873"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="tree-2">
              <svg
                strokeWidth="0.00064"
                stroke="#b77873"
                fill="#b77873"
                viewBox="0 0 64.00 64.00"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.0"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                    fill="#b77873"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="tree-3">
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64.00 64.00"
                fill="#a16773"
                stroke="#a16773"
                strokeWidth="0.00064"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#a16773"
                    d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="filter"></div>
          </section>

          <section className="content-section">
            <div className="weather-info">
              <div className="right-side">
                <div className="location">
                  <div>
                    <svg
                      version="1.0"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="64px"
                      height="64px"
                      viewBox="0 0 64 64"
                      fill="#ffffff"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#ffffff"
                          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                        ></path>
                      </g>
                    </svg>
                    <span>
                      231A/7G Lohia Pandey Ka Hata, Bahadurganj - Prayagraj (211003)
                    </span>
                  </div>
                </div>
                <img className="temperature" src={logo} alt="logo" />
              </div>
            </div>
            <div className="forecast">
              <div>
                <span>
                  <span style={{ color: "#00d4c2" }}>
                    <i className="fa-solid fa-phone fa-2x"></i>
                  </span>
                  <span className="fs-3">/</span>
                  <span style={{ color: "green" }}>
                    <i className="fa-brands fa-whatsapp fa-2x"></i>
                  </span>
                </span>
                <h6 className="my-0">9454984405, 8081360124</h6>
              </div>
              <div className="separator"></div>
              <div>
                <span style={{ color: "red" }}>
                  <i
                    className="fa-brands fa-youtube fa-2x"
                    onClick={() => {
                      window.location.href = "https://www.youtube.com";
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.cursor = "pointer";
                    }}
                  ></i>
                </span>

                <span style={{ color: "red" }}>
                  <i
                    className="fa-brands fa-instagram fa-2x"
                    onClick={() => {
                      window.location.href = "https://www.instagram.com";
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.cursor = "pointer";
                    }}
                  ></i>
                </span>
              </div>
              <div className="separator"></div>

              <h3 className="text-center fw-bold">Bio-Concept Classes</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact