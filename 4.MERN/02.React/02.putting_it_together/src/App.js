import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import PersonCard2 from './components/PersonCard2';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <fieldset>
        <PersonCard firstName="Chenxi" lastName="Wang" age={30} hairColor="brown" />
        <PersonCard firstName="Richard" lastName="Liu" age={30} hairColor="black" />
        <h1>Big inversion</h1>
        <PersonCard2 firstName="Vivi" lastName="Wang" age={28} hairColor="brown" />
        <PersonCard2 firstName="Zhenglai" lastName="Liu" age={32} hairColor="brown" />
      </fieldset>
    </div>
  );
}

export default App;
