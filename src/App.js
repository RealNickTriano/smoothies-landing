import DrinkSection from "./components/DrinkSection";
import MainCard from "./components/MainCard";
import blob from './images/blob.svg';
import blueBlob from './images/blueblob.svg';
import { useRef } from 'react';

function App() {

  const navItems = ['Home', 'Specialties', 'About', 'Contact Us']

  const specialties = useRef(null)

  return (
    <>
      <div className="absolute top-[-30%] left-[-40%] z-0 animate-wiggle hidden laptop:block">
        <img src={blob} alt="" />
      </div>
      <div className="flex justify-center items-start desktop:min-h-screen desktop:mt-36 mt-16">
        <MainCard 
          navItems={navItems}
          specialtiesRef={specialties}
        />
      </div>
      <DrinkSection 
        refProp={specialties}
      />
    </>
  );
}

export default App;
