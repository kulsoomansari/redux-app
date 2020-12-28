import { Provider } from 'react-redux';
import './App.css';
import CounterInput from './components/CounterInput';
import CounterOutput from './components/CounterOutput';
import store from './redux-toolkit/Store';
// import {Provider} from 'react-redux'
// import { store } from './Counter/Store';
// import CounterOutput from './Counter/CounterOutput';
// import CounterInput from './Counter/CounterInput';


function App() {
   return (
    <div className = "App">
      {/* <Provider store={store}>
      <CounterOutput />
      <CounterInput />
      </Provider> */}
     <Provider store={store}>
    <CounterOutput />
    <CounterInput />
     </Provider>
    </div>
  );
}

export default App;
