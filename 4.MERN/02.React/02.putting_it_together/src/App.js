import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import PersonCard2 from './components/PersonCard2';
import HookForm from './components/HookForm';

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <fieldset>
        <div className="d-flex gap-3">
          <PersonCard firstName="Chenxi" lastName="Wang" age={30} hairColor="brown" />
          <PersonCard firstName="Richard" lastName="Liu" age={30} hairColor="black" /></div>
        <h1>Big inversion</h1>
        <div className="d-flex gap-3">
          <PersonCard2 firstName="Vivi" lastName="Wang" age={28} hairColor="brown" />
          <PersonCard2 firstName="Zhenglai" lastName="Liu" age={32} hairColor="brown" /></div>

        <HookForm />
      </fieldset>
    </div>
  );
}

export default App;
