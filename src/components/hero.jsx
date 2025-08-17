 import React from "react";
import "../components-css/hero.css";
import vector from '../assets/images/hero-img/Vector (2).png';
import doctor2 from '../assets/images/hero-img/dr 2.png';
import doctor3 from '../assets/images/hero-img/dr 3.png';
import doctor1 from '../assets/images/hero-img/dr 1.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* -------- Left Side Content -------- */}
        <div className="frame-2">
          <div className="hero-content">
            <div className="frame-1">
              <small className="greet">Namaste, Welcome to Amrutam</small>
              <h1>
                Join Amrutam – <span>Grow Your Practice</span>
              </h1>
              <p>
                Connect with more patients, set your own schedule,<br/>
                 and grow your Ayurvedic practice effortlessly.
              </p>
            </div>
            <button className="join-btn">Join Now</button>
          </div>

          {/* Stats Section */}
          <div className="Group-27">
            <div className="Group-26">
              <p className="Users">500+</p>
              <p className="activeUsers">Average Active Users</p>
            </div>

            <div className="rectangle"></div>

            <div className="Group-26">
              <p className="Users">40+</p>
              <p className="activeUsers">Average daily free calls</p>
            </div>
          </div>
        </div>

        {/* -------- Right Side Doctors & Vector -------- */}
        <div className="group-98">
          <div className="mask-group">
            {/* Vector Background */}
            <img src={vector} alt="Vector Background" className="vector-img" />

            {/* Doctor Images Overlay */}
            <div className="group-b">
              <div className="doctor doctor-1">
                <img src={doctor1} alt="Doctor 1" />
              </div>
              <div className="doctor doctor-2">
                <img src={doctor2} alt="Doctor 2" />
              </div>
              <div className="doctor doctor-3">
                <img src={doctor3} alt="Doctor 3" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
