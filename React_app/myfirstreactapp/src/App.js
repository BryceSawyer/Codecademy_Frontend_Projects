import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: 100, color: '#61dafb'}}>
          hello Codecademy!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
