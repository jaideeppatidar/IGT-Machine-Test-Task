import './App.css';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './layouts/Footer/footer';
import HomePage from './pages/HomePage'
import HowItWorks from './components/HowItWorks/HowItWorks';
import PopularCourses from './components/PopularCourses/PopularCourses';
import PricingPlan from './components/PricingPlan/PricingPlan';
import SmartJackpots from './components/SmartJackpots/SmartJackpots';
import TutorialSlider from './components/TutorialSlider/TutorialSlider';
import TutorialSliderSection from './components/TutorialSliderSection/TutorialSliderSection';
import Header from './layouts/Header/header'
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <TutorialSlider />
      <SmartJackpots />
      <PopularCourses />
      <HowItWorks />
      <PricingPlan />
      <TutorialSliderSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
