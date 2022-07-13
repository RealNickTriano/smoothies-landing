import MainCard from "./components/MainCard";

function App() {

  const navItems = ['Home', 'Specialties', 'About', 'Contact Us']

  return (
    <div className="flex justify-center items-center min-h-screen">
      <MainCard 
        navItems={navItems}
      />
    </div>
  );
}

export default App;
