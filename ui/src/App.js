import './App.css';

function App() {
  return (
    <div className="App">
      <navbar className="App-navbar">

        <p className="start">Menu</p>
        <p className="middle">User Name</p>
        <p className="end">Sales Report</p>
  
      </navbar>
      <selectors className="App-selectors">
        <ul>
          <li>selector 1</li>
          <li>selector 2</li>
          <li>selector 3</li>          
        </ul>      
      </selectors>
    </div>
  );
} 

export default App;
