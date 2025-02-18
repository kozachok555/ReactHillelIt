import './App.css';

export const cat = {
  name: "Timmy",
  age: 12,
}
function App() {


  return (
    <div className="App">
        <p>{cat.name}{cat.age}</p>
    </div>
  );
}

export default App;
