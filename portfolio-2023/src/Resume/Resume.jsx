import React from 'react';
import NavBar from '../NavBar/NavBar';

export default function Resume() {
    

    return (
        <div className='flex flex-column flex-center App'>            
            <NavBar/>
            <img className='height-85 mb-50' src={require('../images/resume.png')} alt="resume"/>
        </div>

    );
  }