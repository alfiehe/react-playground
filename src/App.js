import React from 'react';
import './App.css';
import WorkerDemo from './component/worker-demo';
import HiddenMessage from './jest-demo/hidden-message';
import TransitionDemo from './component/transition-demo';
import UseGlobalDemo from './component/useGlobalHook-demo';

function App() {
  const title = 'React Playground';

  return (
    <div className="App">
      <h1>{ title }</h1>
      <div className="demo-wrap">
      <UseGlobalDemo />
      <TransitionDemo />
      <WorkerDemo />
      <HiddenMessage>Message...</HiddenMessage>
      </div>
    </div>
  );
}

export default App;
