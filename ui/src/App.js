import './App.css';
//import axios from "axios";
import Navbar from './Navbar';
import Chart from './Chart';
import selector from './MockData';

/*
const  baseURL =  'http://localhost:5000/item'
 
let fullData = {}
axios.get(baseURL)
.then(response => {
fullData = response
console.log("FOUND DATA");
})
*/


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <selectors className="App-selectors">
        <label for="category">category: </label>
        <select name="category" id="category">
          <option value="ropa">Ropa</option>
          <option value="acessorio">Acessorio</option>
        </select>
        <label for="product">product: </label>
        <select name="product" id="product">
          <option value="camisa">Camisa</option>
          <option value="chapeu">Chapeu</option>
        </select>
        <label for="brand">brand: </label>
        <select name="brand" id="brand">
          <option value="aldeua">Aldeia</option>
          <option value="nike">Nike</option>
        </select>
      </selectors>
      <h2>Sales By Month for:</h2>
      <Chart data = {selector.acessorio.sapato.Riff}/>
    </div>
  );
} 

export default App;
