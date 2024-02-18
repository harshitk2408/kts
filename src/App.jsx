import React from 'react';
import './App.css';
import Building from './Components/Building/Buiding';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <div className='bg'></div>
      <Navbar/>
      <Building />
      <Footer/>
    </>
  );
}

export default App;
