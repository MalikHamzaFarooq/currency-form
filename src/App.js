import React, { useState, useEffect } from 'react';
import SmallScreen from "./Components/Tablep2pComp/SmallScreen";
import CartComponent from "./Components/Tablep2pComp/CartComponent";
import BuyCoinSection from './Components/Tablep2pComp/BuyCoinSection';
import SimpleSlider from './Components/Tablep2pComp/SimpleSlider';


function App() {
  const [windowWidth, setWindowWidth] =useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
      {/* <Navbar/> */}
   {/* <KanbanApp/> */}
   {/* <PersistentDrawerLeft/> */}
   <SimpleSlider/>
      {windowWidth <= 769 ? <SmallScreen /> :  <CartComponent/> }
   <BuyCoinSection/>
    </div>
  );
}

export default App;
