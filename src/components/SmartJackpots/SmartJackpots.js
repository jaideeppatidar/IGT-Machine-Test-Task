import React from 'react';
import './SmartJackpots.css';

export default function SmartJackpots() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="smart-jackpots">
        <div className="left">
          <div className="grid">
            <div className="box orange">
              <h2>80K+</h2>
              <p>We have more than students</p>
            </div>
            <div className="box red">
              <h2>150+</h2>
              <p>Free online tutorials videos available</p>
            </div>
            <div className="box pink">
              <h2>90+</h2>
              <p>Daily updated blog post maintain</p>
            </div>
            <div className="box purple">
              <h2>& 3M</h2>
              <p>Job posted everydays with qualification</p>
            </div>
          </div>
        </div>

        <div className="right">
          <h5 className="sub">CORE FEATURES</h5>
          <h2 className="title">Smart Jackpots<br />that you may love this anytime & anywhere</h2>
          <p className="desc">
            Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
          </p>
          <button className="explore-btn" onClick={scrollToNext}>Explore details</button>
        </div>
      </section>

      
    </>
  );
}
