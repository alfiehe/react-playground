import './App.css';
import HiddenMessage from './jest-demo/hidden-message';

function App() {
  const title = 'React Playground';
  return (
    <div className="App">
      <h1>{ title }</h1>
      <HiddenMessage>Message...</HiddenMessage>
    </div>
  );
}

export default App;
