
import React from 'react';
import Slider from 'react-slick';
import './TutorialSliderSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { tutorials } from '../../utils/data';

const TutorialSliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="tutorial-section">
      <div className="slider-content-wrapper">
        <div className="slider-left">
          <Slider {...settings}>
            {tutorials.map((item) => (
              <div className="card small" key={item.id}>
                <div className="card-img small">
                  <img src={item.image} alt={item.title} />
                  <div className="play-button">▶</div>
                </div>
                <div className="card-body">
                  <div className="card-rating">
                    {'★'.repeat(Math.floor(item.rating))}
                    <span>
                      {item.rating} ({item.reviews} reviews)
                    </span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>👁 {item.students} students watched</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="slider-right">
          <p className="label">FREE TUTORIAL</p>
          <h2>More than thousand of free tutorial upload every weeks</h2>
          <p className="desc">
            Get your tests delivered at let home collect sample from the victory of the managments that supplies best
            design system guidelines ever. Get your tests delivered at let home collect sample.
          </p>
          <button className="btn">Explore details</button>
        </div>
      </div>
    </section>
  );
};

export default TutorialSliderSection;