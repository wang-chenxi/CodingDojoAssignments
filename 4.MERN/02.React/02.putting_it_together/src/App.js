import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <fieldset>
        <PersonCard firstName="Chenxi" lastName="Wang" age={30} hairColor="brown" />
        <PersonCard firstName="Richard" lastName="Liu" age={30} hairColor="black" />
      </fieldset>
    </div>
  );
}

export default App;
