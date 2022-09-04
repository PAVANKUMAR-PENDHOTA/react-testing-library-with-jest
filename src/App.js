// import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <div>
          <h1>This is React Testing library</h1>
          <p>How to interact react testing library with jest</p>
      </div>
      {/* <div>
      <Login data-testid="child"/>
      </div> */}
      <div>
        <Registration/>
      </div>
    </div>
  );
}

export default App;
