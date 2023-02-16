import React from 'react';


export default function NavBar() {
    return <>
        
            <div className="flex space-between width-95">
                <div>
                    <a href="/">
                        <h2>Home</h2>
                    </a> 
                </div>
                <div>
                    <img className="nav-logo" src={require('../images/wolf-logo.png')} alt="wolf-logo" />
                </div>
            </div>
        
    </>
   
}