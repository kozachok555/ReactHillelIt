import './App.css';
import Swapi from './SwapiComponent/Swapi';
import {Provider} from 'react-redux'
import { store } from './store';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Swapi/>
      </div>
    </Provider>
  );
}

export default App;
