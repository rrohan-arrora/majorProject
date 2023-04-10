import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbarAndFooter/Navbar';
import { ExploteTopBooks } from './layouts/HomePage.tsx/ExploreTopBooks';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploteTopBooks/>
    </div>
  );
}

export default App;
