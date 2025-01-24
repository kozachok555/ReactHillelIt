import './App.css';
import PracticeOne from './Components/Practice1/PracticeOne';
import RoutePractice from './Components/RoutePractice/RoutePractice'
import { Routes, Route, useNavigate} from "react-router";

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path="/practice-one" element={<PracticeOne/>} />
        <Route path="/" element={<RoutePractice />} />
      </Routes>
      <button onClick={()=>{
        navigate('./practice-one')
      }}>Practice</button>
      <button onClick={()=>{
        navigate('/')
      }}>Home</button>
    </div>
  );
}

export default App;
