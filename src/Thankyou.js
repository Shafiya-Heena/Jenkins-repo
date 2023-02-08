import React from 'react';
function Thankyou (props) {
    // read the info from props, coming from the ancestor component
    return (
        <div>
          <h1>Thank You {props.email}</h1>
          <h3>we appreciate your comments: {props.comment}</h3>
          </div>
      );
    }
    
    export default Thankyou;