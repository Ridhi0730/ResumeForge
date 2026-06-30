import React, { useState } from 'react'
import Header from './components/layout/Header';
import ResumeBuilder from './pages/ResumeBuilder'

const App = () => {

  

  return (
    <div className='p-4'>
      <Header />
      
      <ResumeBuilder />
      
    </div>
  );
}


export default App
