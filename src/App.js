import './App.css';
import Home from './Home'
import TopBar from './TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;