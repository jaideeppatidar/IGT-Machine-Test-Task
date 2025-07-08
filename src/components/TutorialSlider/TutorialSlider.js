import Slider from 'react-slick';
import './TutorialSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { tutorialsSlider } from '../../utils/data'
export default function TutorialSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="tutorial-slider-sections">
            <h5 className="subtitle">QUALITY FEATURES</h5>
            <h2 className="title">Tutorials that people love most</h2>
            <Slider {...settings}>
                {tutorialsSlider.map((item) => (
                    <div key={item.id} className="card">
                        <div className="card-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="card-content">
                            <div className="rating">
                                ⭐️ {item.rating} ({item.reviews} reviews)
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="watch-info">👁 {item.watched.toLocaleString()} students watched</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
