import './App.css';
import axios from "axios";
import Navbar from './Navbar';
import Chart from './Chart';
import mockData from './MockData';


const  baseURL =  'http://localhost:5000/item'
 


let fullData = {}
axios.get(baseURL)
.then(response => {
fullData = response
console.log("FOUND DATA")
;
})
fullData = mockData

let categories = []
for (let selection in fullData){
  let category = selection.category
  if(categories.indexOf(category) === -1){
    categories += [category]
  }
}



function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <selectors className="App-selectors">
      <label for="category">category:</label>
<select name="category" id="category">
  <option value="Ropa">Ropa</option>
  <option value="Acessorio">Acessorio</option>
</select>
<label for="category">product:</label>
<select name="category" id="category">
  <option value="Ropa">Ropa</option>
  <option value="Acessorio">Acessorio</option>
</select>
<label for="category">Brand:</label>
<select name="category" id="category">
  <option value="Ropa">Ropa</option>
  <option value="Acessorio">Acessorio</option>
</select>
      </selectors>
      <h2>Sales By Month for:</h2>
      <Chart data = {mockData[2].sales}/>
    </div>
  );
} 

export default App;
