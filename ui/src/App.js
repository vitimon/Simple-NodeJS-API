import './App.css';
import axios from "axios";
import Navbar from './Navbar';
import Chart from './Chart';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <selectors className="App-selectors">
        <p>Category:</p>
        <p>Product:</p>
        <p>Brand:</p>
      </selectors>
      <h2>Sales By Month for:</h2>
      <Chart/>
    </div>
  );
} 

export default App;
