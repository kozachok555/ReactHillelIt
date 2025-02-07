import './App.css';
import TodoList from './Components/TodoList/TodoList';
import Counter from './Components/Counter/Counter';
import {Provider} from 'react-redux'
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Counter/>
          <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
