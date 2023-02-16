import React from 'react';
import Contact from '../Contact/Contact';
import NavBar from '../NavBar/NavBar';

export default function About() {
    return (
        <div className='flex flex-column flex-center App'>
            <NavBar/>
            <Contact/>
        </div>
    );
  }