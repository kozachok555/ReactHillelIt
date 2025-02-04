import './App.css';
import {Provider} from 'react-redux'
import { store } from './store';
import CounterComponent from './Components/Counter/CounterComponent/CounterComponent';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CounterComponent/>
      </div>
    </Provider>
  );
}

export default App;
