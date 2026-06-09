import React from 'react';
import Navbar from './Navbar';
import PopularSlider from './PopularSlider';
import TreadingSlider from './TreadingSlider'


const Home =()=>{
  return(
    <>
    <div className="main">
    <Navbar/>
    <PopularSlider/>
    <TreadingSlider/>
    
    </div>
    </>
  )
}
export default Home