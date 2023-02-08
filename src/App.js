import './App.css';
import React, { useState } from 'react';
import View from './View';


//const [email, setEmail] = useState();

function App() {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [auth, setAuth] = useState('auth');

const authenticateUser = async () => {
  try {
    //
    console.log(email)
    console.log(password)
    //verify the credentials (just hardcoding here)
    if(email === 'sheena@my.centennialcollege.ca' && password === 'Aliza@123') {
      setAuth('authenticated'); // update the state
      console.log(auth);
    }
    else if(email === 'shafiya@my.centennialcollege.ca' && password === 'Ali123') {
      setAuth('authenticated'); // update the state
      console.log(auth);
    } 
    else{  
     alert('Please provide correct login details');
    }
  } 
  catch (e) { //print the error
    console.log(e);
  }
};

  return (
    <div className="App">
      {auth !== 'authenticated'  
        ? <div className ="container">
            <div className="container">
              <h1>Login to Evaluate the course:</h1>
              <label>Email: </label>
              <input type="text" className = "fields" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="container">
              <label>Password: </label>
              <input type="password" className = "fields"  onChange={e => setPassword(e.target.value)} />
            </div>
        
              <button className="form-field-no-caption" onClick={authenticateUser}>Login</button>
              

        </div>   
       
        
          : <View auth={auth} email={email} />
           
        
        
        
      }

    
        
          
           
      
    </div>

  );
}
export default App;
