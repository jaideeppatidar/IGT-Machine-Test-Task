import './HeroSection.css';
import heroImg from '../assets/images/image.png';
import StartImage from '../assets/images/curstart.png';
import Paypal from '../assets/logo/paypal.png';
import Google from '../assets/logo/google.png';
import DropBox from '../assets/logo/Dropbox_logo_2017.png';
import searchIcon from '../assets/icons/Combined shape 15225.png';
import { useState } from 'react';


const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-left">
          <div className="rating">
            <img src={StartImage} alt="Star" />
            <span className="rating-text">Trusted by over 4,332 students</span>
          </div>
          <h1>
            Learn Design <br />
            <span className="highlight">with Nia Matos</span>
          </h1>
          <p className="description">
            Get your blood tests delivered at let home collect sample from the
            victory of the managments that supplies best design system guidelines ever.
          </p>
          <div className="search-box">
            <input type="text" placeholder="Search Course Name" />
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>

          <div className="sponsors">
            <span>Sponsored by:</span>
            <img src={Paypal} alt="Paypal" />
            <img src={Google} alt="Google" />
            <img src={DropBox} alt="Dropbox" />
          </div>
        </div>

        <div className="hero-right">
  <div className="dotted-bg">
    <div className="image-wrapper" onClick={() => setIsPlaying(true)}>
      {isPlaying ? (
        <video
          className="hero-video"
          src={require('../assets/video/6005666_Delivery_Fast_Food_3840x2160.mp4')}
          autoPlay
          controls
          muted
          playsInline
        />
      ) : (
        <img src={heroImg} alt="Hero" className="hero-img" />
      )}
    </div>
  </div>
</div>

      </section>
    </div>
  );
};

export default HeroSection;
