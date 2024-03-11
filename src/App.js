import React, { useState, useEffect } from 'react';
import SmallScreen from "./Components/Tablep2p/SmallScreen";
import CartComponent from "./Components/Tablep2p/CartComponent";

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
   
      {windowWidth <= 769 ? <SmallScreen /> :  <CartComponent/> }
    </div>
  );
}

export default App;
