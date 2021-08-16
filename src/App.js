import React from 'react';
import Slider from './pages/slider';
import About from './pages/about';
import Courses from './pages/courses';
import More from './pages/more';
import Contact from './pages/contact';
import Footer from './pages/footer';

import Navbar from './pages/navbar';


function App() {

  

  return (
    <div className="App">
  
    <Navbar />
    <About />
    <Courses />
    <More />
    <Slider />
    <Contact />
    <Footer /> 
    
    </div>
  
    
  );
}

export default App;
