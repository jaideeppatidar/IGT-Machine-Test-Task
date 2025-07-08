import React from 'react';
import './PopularCourses.css';
import playIcon from '../../assets/icons/play.png';
import CheckMark from '../../assets/icons/check-mark.png';
import ArrowDown from '../../assets/icons/arrowdown.png';



const courses = [
    {
        title: "Professional graphic design tutorial full course with exercise file",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: "5.0",
        reviews: "392",
        students: "2,538",
        videos: "7 Video Classes",
        duration: "4 hrs",
        features: []
    },
    {
        title: "Become ultimate photoshop expert within 30 days",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: "5.0",
        reviews: "392",
        students: "2,538",
        videos: "7 Video Classes",
        duration: "4 hrs",
        features: [
            "How to reduce file pixel dimentions without loosing quality",
            "Create vector file from restarize layer styles",
            "How to make logo pixel perfects with different extension",
            "Make color gradient with photoshop build-in tools"
        ]
    },
    {
        title: "After effects animation tutorial with photoshop documents",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: "5.0",
        reviews: "392",
        students: "2,538",
        videos: "7 Video Classes",
        duration: "4 hrs",
        features: []
    },
    {
        title: "Adobe illustrator vector art design mockup",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: "5.0",
        reviews: "392",
        students: "2,538",
        videos: "7 Video Classes",
        duration: "4 hrs",
        features: []
    }
];

export default function PopularCourses() {
    return (
        <section className="popular-courses">
            <h5 className="subheading">QUALITY FEATURES</h5>
            <h2 className="heading">Popular Designing Course</h2>

            {courses.map((course, idx) => (
                <div className="course-card" key={idx}>
                    <div className="card-left">
                        <div className="play-icon">
                            <img src={playIcon} alt="Play" />
                        </div>
                        <div>
                            <div className="stars">
                                ⭐⭐⭐⭐⭐ <span>({course.reviews} reviews)</span> • {course.students} students watched
                            </div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.description}</p>

                            {course.features.length > 0 && (
                                <div className="features">
                                    {course.features.map((feature, fIdx) => (
                                        <div className="feature-item" key={fIdx}>
                                            <img src={CheckMark} alt="Play" />{feature}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card-right">
                        <button className="video-btn">
                            {course.videos} | {course.duration} 
                        </button>
                         <img src={ArrowDown} alt="Play" />
                    </div>
                </div>
            ))}
        </section>
    );
}
