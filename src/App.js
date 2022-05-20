import React from "react";
import SortingVisualizer from './components//SortingVisualizer/SortingVisualizer'
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="outline">
    <div className="container">
      <Navbar />
      <SortingVisualizer />
        </div>
        </div>
      <div className="container2">
        <Hero/>
      </div>
      </>
  );
}

export default App;
