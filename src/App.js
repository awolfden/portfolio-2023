import React, { useState } from 'react';
import './App.css';
import Index from './Index/Index';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState("index");

  const updatePage = (page) => {
    setCurrentPage(page)
  };

  return (
    <div className="App">
      {currentPage === "index" ? <Index updatePage={updatePage}/> : null}
      {currentPage === "about" ? <About/> : null}
      {currentPage === "projects" ? <Projects/> : null}
      {currentPage === "resume" ? <Resume/> : null}
    </div>
  );
}

export default App;
