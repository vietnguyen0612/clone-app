import React from 'react';
import Header from './component/Header';
import Product from './component/Product';
import WhyWe from './component/WhyWe';
import OurTeam from './component/OurTeam';
import './App.scss'
function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <WhyWe />
      <OurTeam />
    </div>
  );
}

export default App;
