import DrinkSection from "./components/DrinkSection";
import MainCard from "./components/MainCard";
import blob from './images/blob.svg';

function App() {

  const navItems = ['Home', 'Specialties', 'About', 'Contact Us']

  return (
    <>
      <div className="absolute top-[-30%] left-[-40%] z-0 animate-wiggle hidden laptop:block">
        <img src={blob} alt="" />
      </div>
      <div className="flex justify-center items-start desktop:min-h-screen desktop:mt-36 mt-16">
        <MainCard 
          navItems={navItems}
        />
      </div>
      <DrinkSection />
    </>
  );
}

export default App;
