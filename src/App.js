import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet 
} from "react-router-dom";
const removebodyclasses = () =>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');

}
function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const togglemode =(cls)=>{
   
    if(cls === null)
    {
      if(mode === 'light'){
        setmode('dark');
        document.body.style.background = ('#202738');
        showalert("Darkmode was enabled","success");
        // document.title = "TextUtils - Dark Mode"
      }
      else
      {
        setmode('light');
        document.body.style.background = ('white');
        showalert("Lightmode was enabled","success");
        // document.title = "TextUtils - Light Mode";
      }
    }
    else{
      removebodyclasses();
      document.body.classList.add('bg-'+cls);
    }
    
  };

  const showalert=(message,type)=>
  {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  return (
    <>
   <BrowserRouter>
        <Navbar title="Textutils" about="About Textutils" mode={mode} togglemode={togglemode} /> {/* Render Navbar outside of the Routes */}
        
        <Alerts alert={alert} />
        <div className='container mb-3'>
        <Routes>
          <Route exact path='/' element={<Outlet />}> {/* Use Outlet to render child routes */}
            <Route index element={<div className='container mb-3'><Textform showalert={showalert} heading="Enter the text Analysis" mode={mode} /></div>} />
            {/* <Route exact path='home' element={<Textform showalert={showalert} heading="Enter the text Analysis" mode={mode} />} /> */}
            <Route exact path='about' element={<About mode={mode}/>} />
          </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
