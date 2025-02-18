import './App.scss';
import {Route, Routes, Navigate} from 'react-router'
import Main from './Components/MainComponent/Main';
import Swapi from './Components/SwapiComponent/Swapi';
import TodoList from './Components/TodoListComponent/TodoList';
import { useTheme } from './Components/ThemeContext';
import {Provider} from 'react-redux'
import { store } from './store';
function App() {
  const {isLightMode} = useTheme()
  return (
    <div className={`app-container-${isLightMode ? 'light' : 'dark'}`}>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path='/main-page' element={<Main/>}/>
            <Route path='*' element={<Navigate to="/main-page" replace/>}/>
            <Route path='/swapi' element={<Swapi/>}/>
            <Route path='/todo-list' element={<TodoList/>}/>
          </Routes>
        </div>
      </Provider>
    </div>
  );
}

export default App;
