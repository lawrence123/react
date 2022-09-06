import logo from './logo.svg';
import './App.css';

function App() {
  function fileSelectHandler(event){
     console.log(event.target.value);
  }
  return (
    <div className="App">
      <input type="file" onChange={fileSelectHandler}/>
    </div>
  );
}

export default App;
