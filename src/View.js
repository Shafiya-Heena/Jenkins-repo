import './login.css';
import React, { useState } from 'react';
import Thankyou from './Thankyou';
function View (props) {

  
  const [comment, setComment] = useState();
  const [page, setPage] = useState();

    console.log(props.auth)
   


   //if button is clicked set view to "View"
  const onClick = async () => {
    try {
      setPage("Page")
     
    } catch (e) { //print the error
      console.log(e);
    }
  };
  if(props.email === 'sheena@my.centennialcollege.ca'){
    return (
        <div>
           {page !== 'Page' 
        ? <div className ="container">
          
          <div className="container">
            <label>Course Code: </label>
            <input type="text" className = "fields"  />
          </div>
          <div className="container">
            <label>Course Name: </label>
            <input type="text" className = "fields"  />
          </div>
          <div className="container">
          <label>Favorite Topic: </label>
          <input type="text" className = "fields"  />
        </div>
        <div className="container">
          <label>Favorite assignment: </label>
          <input type="text" className = "fields"  />
        </div>
          <div className="container">
            <label>Student Email: </label>
            <input type="text" className = "fields" placeholder={props.email}   />
          </div>
          <div className="container">
            <label>Your Comments: </label>
            <textarea className = "fields" onChange={e => setComment(e.target.value)} rows="4" cols="50" />
          </div>
          <div className="container">
            <button className="form-field-no-caption" onClick={onClick} >Submit</button>
          </div>
          </div>        
        :  <Thankyou email= {props.email} comment={comment} />
    }
    </div>
        
      );
  }
  else{
    return (
      <div>
         {page !== 'Page' 
      ? <div className ="container">
        
        <div className="container">
          <label>Favorite Topic: </label>
          <input type="text" className = "fields"  />
        </div>
        <div className="container">
          <label>Favorite assignment: </label>
          <input type="text" className = "fields"  />
        </div>
        <div className="container">
          <label>Strongest Technical Skill: </label>
          <input type="text" className = "fields"  />
        </div>
        <div className="container">
            <label>Course Code: </label>
            <input type="text" className = "fields"  />
          </div>
          <div className="container">
            <label>Course Name: </label>
            <input type="text" className = "fields"  />
          </div>
        <div className="container">
          <label>Student Email: </label>
          <input type="text" className = "fields" placeholder={props.email}  />
        </div>
        <div className="container">
          <label>Your Comments: </label>
          <textarea className = "fields" onChange={e => setComment(e.target.value)} rows="4" cols="50" />
        </div>
        <div className="container">
          <button className="form-field-no-caption" onClick={onClick} >Submit</button>
        </div>
        </div>        
      :  <Thankyou email={props.email} comment={comment} />
  }
  </div>
      
    );
  }
    }
    //
    export default View;