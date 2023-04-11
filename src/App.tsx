import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbarAndFooter/Navbar';
import { ExploteTopBooks } from './layouts/HomePage/ExploreTopBooks';
import Carousal from './layouts/HomePage/Carousal'; 
import { Heros } from './layouts/HomePage/Heros';
import { LibraryService } from './layouts/HomePage/LibraryService';
function App() {
  return (
    <div>
      <Navbar/>
      <ExploteTopBooks/>
      <Carousal/>
      <Heros />
      <LibraryService />
    </div>
  );
}

export default App;
