
import { useSelector } from 'react-redux';
import './App.css';
import { Loader } from './Components/Loader';

import { NavBar } from './Components/Nav/NavBar';
import { RouteData } from './Components/RouteData';






function App() {
  const select=useSelector((state)=>state)
  const loader=select.ProductReducer.loader
  
  return (
    <div className="App">
      {loader&& <Loader/>}
      
       <RouteData/>
      {/* <Loader/> */}
       
    
    
     
      
    </div>
  );
}

export default App;
