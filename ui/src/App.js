import './App.css';
import axios from "axios";
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <selectors className="App-selectors">
        <p>Category:</p>
        <p>Product:</p>
        <p>Brand:</p>
      </selectors>
    </div>
  );
} 

export default App;
