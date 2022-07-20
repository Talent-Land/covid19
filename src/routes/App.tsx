import React from 'react';
import '../App.css';
import MainContainer from '../containers/main.container';
import ResearchContainer from '../containers/research.container';

function App() {
  return (
    <div className='flex w-screen h-screen'>
      <MainContainer/>
      <ResearchContainer/>
    </div>
  );
}

export default App;
