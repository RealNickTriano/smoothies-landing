import DrinkSection from "./components/DrinkSection";
import MainCard from "./components/MainCard";
import blob from './images/blob.svg';
import blueBlob from './images/blueblob.svg';
import { useRef } from 'react';
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ContactSection from "./components/ContactSection";

function App() {

  const navItems = ['Home', 'Specialties', 'About', 'Contact Us']

  const specialties = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)
  const home = useRef(null)

  return (
    <>
      <div ref={home} className="absolute top-[-30%] left-[-40%] z-0 animate-wiggle hidden laptop:block">
        <img src={blob} alt="" />
      </div>
      <div className="flex justify-center items-start desktop:min-h-screen desktop:mt-36 mt-16">
        <MainCard 
          navItems={navItems}
          specialtiesRef={specialties}
          aboutRef={about}
          contactRef={contact}
          homeRef={home}
        />
      </div>
      <DrinkSection 
        refProp={specialties}
      />
      <AboutSection 
        refProp={about}
      />
      <ContactSection 
        refProp={contact}
      />
      <Footer />
    </>
  );
}

export default App;
