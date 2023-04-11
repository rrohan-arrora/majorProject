import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbarAndFooter/Navbar';
import { ExploteTopBooks } from './layouts/HomePage/ExploreTopBooks';
import Carousal from './layouts/HomePage/Carousal'; 
import { Heros } from './layouts/HomePage/Heros';
import { LibraryService } from './layouts/HomePage/LibraryService';
import { Footer } from './layouts/navbarAndFooter/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploteTopBooks/>
      <Carousal/>
      <Heros />
      <LibraryService />
      <Footer />
    </div>
  );
}

export default App;
