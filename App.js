//import logo from './logo.svg';
import './App.css';
import StdInputForm from './components/StdInputForm';
import logo from './logo/logo.jpeg';
//import uniBackground from './logo/uniBackground.jpeg';

function App() {
  return (
    
      <div>
          <header>
            <img src={logo} className ="App-logo" style ={{display:"block",float:"left"}} alt="logo" />
            <img src={logo} className = "App-logo" style ={{display:"block",float:"right"}} alt="logo" />
            <h1 style ={{position:"static"}} className ="App">University of Technology (Yatanapon CyberCity) </h1>
          </header>
        <div className='container'>
          <StdInputForm/>
        </div>
      </div>
      
    
      
      
    
  );
}

export default App;
