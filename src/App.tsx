import React from 'react';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
import './App.css';

interface IShowResult {
  message: string;
  status: string;
}

const App: React.FC = () => {
  const positions = useMousePosition();
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image');
  const dogData = data as IShowResult;

  return (
    <div className="App">
      <Hello message="Hello World!"/>
      <LikeButton />
      <MouseTracker />
      <p>X:{positions.x}, Y:{positions.y}</p>
      {loading ? <p>loading</p>
      : <img src={dogData && dogData.message} alt="dog"/>}
    </div>
  );
}

export default App;
