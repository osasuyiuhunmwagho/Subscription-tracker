import Login from './Register/Login.jsx';
import User from './tracker/user.jsx';
import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, data ,} from 'react-router-dom';
import { Form } from 'react-bootstrap';

function App() {
  const[backendData, setBackEndData] = useState({});
  

  useEffect(() => {

    fetch("http://localhost:3001/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackEndData(data)
      }
    )
  }), [];
  //we can't return two components so we use tags
  return(
    <>
    
    
    
    
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '320px',
        padding: '2rem',
        width: '100%'
      }} 
      id = 'root'>
      <BrowserRouter>
        <Routes>
              <Route path = "/" element = {<Login/>} />
              <Route path = "/user" element ={<User/>} />
              
           
          
        </Routes>
        
      </BrowserRouter>
      
      </div>
      
      
    
    


    
    
    </>
  );
  

  
}

export default App
