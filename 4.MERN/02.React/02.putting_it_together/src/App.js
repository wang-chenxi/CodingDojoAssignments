import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import PersonCard2 from './components/PersonCard2';
import HookForm from './components/HookForm';
import ValidateForm from './components/ValidateForm';
import TodoDisplay from './components/TodoDisplay';
import Tabs from './components/Tabs';
import CoinFlipping from './components/CoinFlipping';
import PokemonAPI from './components/PokemonAPI';
import AxiosPokemonAPI from './components/AxiosPokemonAPI';
import RoutingPractice from './components/RoutingPractice';

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <fieldset className="d-flex flex-column gap-5">
        <h1 className="mb-3 text-success">Scroll down for latest assignments</h1>
        <div className="d-flex gap-3">
          <PersonCard firstName="Chenxi" lastName="Wang" age={30} hairColor="brown" />
          <PersonCard firstName="Richard" lastName="Liu" age={30} hairColor="black" /></div>
        <h1>Big inversion</h1>
        <div className="d-flex gap-3">
          <PersonCard2 firstName="Vivi" lastName="Wang" age={28} hairColor="brown" />
          <PersonCard2 firstName="Zhenglai" lastName="Liu" age={32} hairColor="brown" /></div>
        <HookForm />
        <ValidateForm />
        <TodoDisplay />
        <Tabs />
        <CoinFlipping />
        <PokemonAPI />
        <AxiosPokemonAPI />
        <RoutingPractice />
      </fieldset>
    </div>
  );
}

export default App;
