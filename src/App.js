import React from 'react';
import './App.css';
import WorkerDemo from './component/worker-demo';
import HiddenMessage from './jest-demo/hidden-message';

function App() {
  const title = 'React Playground';

  return (
    <div className="App">
      <h1>{ title }</h1>
      <WorkerDemo />
      <HiddenMessage>Message...</HiddenMessage>
    </div>
  );
}

export default App;
