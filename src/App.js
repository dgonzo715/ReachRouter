import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Hello from './components/Hello';
import Word from './components/Word';
import DisplayColorWord from './components/DisplayColorWord';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Word path="/:word"/>
        <DisplayColorWord path="/:word/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
