import './App.css';
import Counter from './components/state/Counter';
import CounterOneClass from './components/effect/CounterOneClass';
import CounterOneHook from './components/effect/CounterOneHook';
import FullName from './components/state/FullName';
import HookMouse from './components/effect/HookMouse';
import Items from './components/state/Items';
import DataFetch from './components/effect/DataFetch';
import ContextApp from './components/context/ContextApp';
import CounterReducer from './components/reducer/CounterReducer';

function App() {
  return (
    <div className="App">

      {/* useState */}
      <Counter />

      {/* useState with Object */}
      <FullName />

      {/* useState with Array */}
      <Items />

      {/* Without useEffect */}
      <CounterOneClass />

      {/* useEffect */}
      <CounterOneHook />

      {/* useEffect with unmounth*/}
      <HookMouse />

      {/*  */}
      <DataFetch />

      {/* Context */}
      <ContextApp />

      {/* useReducer */}
      <CounterReducer />

    </div>
  );
}

export default App;
