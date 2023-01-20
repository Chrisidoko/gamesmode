import React from 'react'
import Slider from '../Components/buttomSlider/slider';
import Hero from '../Components/hero/hero';
import Topnav from '../Components/topnav/topnav';
import "./pages.scss";



function Store() {
  return (
    <>
       <div className='section'>
       <Topnav/>
       <Hero/>
       <Slider/>
       </div>
    </>
  )
}

export default Store