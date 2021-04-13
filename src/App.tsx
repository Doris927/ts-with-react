import React from 'react';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello message="Hello World!"/>
      <LikeButton />
      <MouseTracker />
    </div>
  );
}

export default App;
