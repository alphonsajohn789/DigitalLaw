import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './Admin.css';

function AdminHome() {
  

 

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin - Home</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="../css/style.css" />
        <link rel="icon" href="../logo.png" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="../css/style.css" />
      </head>
      <body className="body-login">
        

        <div className="container mt-5">
        <h3>Admin Home</h3>
          <div className="container text-center">
         
            <div className="row row-cols-3">
              
              
              <a href="/users" className="col btn btn-dark m-2 py-3 col-3">
                <i className="fa fa-graduation-cap fs-1" aria-hidden="true"></i>
                <br />
                Users
              </a>
              
              <a href="/view_appointments" className="col btn btn-dark m-2 py-3 col-3">
                <i className="fa fa-columns fs-1" aria-hidden="true"></i>
                <br />
                Appointments
              </a>
              
              
              <a href="/" className="col btn btn-dark m-2 py-3 col-3">
                <i className="fa fa-sign-out fs-1" aria-hidden="true"></i>
                <br />
                Logout
              </a>
            </div>
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        <script>
          {`
            $(document).ready(function(){
              $("#navLinks li:nth-child(1) a").addClass('active');
            });
          `}
        </script>
      </body>
    </div>
  );
}

export default AdminHome;
