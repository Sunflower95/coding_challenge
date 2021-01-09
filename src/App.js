import './App.css';
import NavBar from './components/navBar';
import SideBar from "./components/sideBar";
import Dashboard from './components/dashboard'
import WidgetBar from './components/widgetBar'

function App() {
  return (
    <div className="App">
         <NavBar />
      <div className="Right">
           <SideBar />
           <Dashboard />
      </div>
 
     
    
      {/* <SideBar /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
