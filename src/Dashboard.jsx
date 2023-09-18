import { useNavigate } from 'react-router-dom';
import React from "react";

import './Style_dash.css';

function Dashboard(){
    const navigate = useNavigate();

    function logoutSubmit() {
      localStorage.setItem("login", false);
      localStorage.setItem("loginStatus", "Logged out successfully!");
      console.log("login:", localStorage.getItem("login"));
      console.log("loginStatus:", localStorage.getItem("loginStatus"));
      // navigate("/login");
    
        localStorage.removeItem("login");
        localStorage.removeItem("loginStatus");
         navigate("/");
    
    
  }
  
    return(
        
        <div className='dash_class'>
            
            
        <h4 className='dash_head'>Expert Contact Details</h4>
        <div className='dash_cards'>
        <div className="row">
 
    <div className="card">
        <p>Samuel Peter</p>
        <p>Senior legal associate</p>
        <p>Contact No: 01782 294800</p>
        <p>Email: sulac@staffs.ac.uk</p>
    </div>
  
  
  
  
    <div className="card"><p>Anna Garland</p>
        <p>Course Director</p>
        <p>Contact No: 01782 294800</p>
        <p>Email: sulac@staffs.ac.uk</p></div>
 
 
</div>
</div>
<div className='dash_footer'>
        
                <button onClick={() => logoutSubmit()}>Logout </button> <br/>
                <button ><a href='/appointment' >Make An Appointment</a></button>
                </div>
    </div>
    )
}

export default Dashboard;