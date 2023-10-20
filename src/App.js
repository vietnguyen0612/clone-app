import React from 'react';
import Header from './component/Header';
import Product from './component/Product';
import WhyWe from './component/WhyWe';
import OurTeam from './component/OurTeam';
import CheckOut from './component/CheckOut';

import './App.scss'
import Testimonial from './component/Testimonial';
import News from './component/News';
import VideoSection from './component/VideoSection';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <WhyWe />
      <OurTeam />
      <CheckOut />
      <Testimonial />
      <News />
      <VideoSection />
      {/* <AboutUs /> */}
      <Contact />

      <div className='back-ground-reviews'></div>
    </div>
  );
}

export default App;
