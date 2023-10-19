import React from 'react';
import Header from './component/Header';
import Product from './component/Product';
import WhyWe from './component/WhyWe';
import OurTeam from './component/OurTeam';
import CheckOut from './component/CheckOut';

import './App.scss'
import Testimonial from './component/Testimonial';
function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <WhyWe />
      <OurTeam />
      <CheckOut />
      <Testimonial />
      <div className='back-ground-reviews'></div>
    </div>
  );
}

export default App;
