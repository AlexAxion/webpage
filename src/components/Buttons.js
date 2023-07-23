import React from 'react';

export const Button1 = () => {
  return (
    <div>
      
      <button className='Button1' onClick={Calculator}>Calculator</button>
      
    </div>
  );
};

export const Button2 = () => {
  return (
    <div>
      
      <button className='Button2' onClick={HomePage}>Home</button>
      
    </div>
  );
};

export const Button3 = () => {
  return (
    <div>
      
      <button className='Button3' onClick={CommunityALI}>CommunityALI</button>
      
    </div>
  );
};

function HomePage() {
window.location.href="/"
} 

function Calculator() {
  window.location.href="/Calculator"
  } 

function CommunityALI() {
  window.location.href="/CommunityALI"
   } 