import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbarAndFooter/Navbar';
import { ExploteTopBooks } from './layouts/HomePage/ExploreTopBooks';
import Carousal from './layouts/HomePage/Carousal'; 
import { Heros } from './layouts/HomePage/Heros';
function App() {
  return (
    <div>
      <Navbar/>
      <ExploteTopBooks/>
      <Carousal/>
      <Heros />
    </div>
  );
}

export default App;
