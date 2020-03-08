import React from 'react';


const DataTable = props => {

   return (
    <div>
      <style>
      {`
        .zoom:hover {
          transform: scale(1.2);
        }

        hr {
          margin-top: 1rem;
          margin-bottom: 1rem;
          border: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        `}
      </style>
      <nav className="navbar navbar-expand-lg static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
                <img className="zoom" src="https://www.luxoft.com/local/templates/lux40/img/logo-blue.png" alt="" />
              </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">About Us
                      <span className="sr-only">(current)</span>
                    </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SignUp</a>
              </li>
              <li className="nav-item">
                <a href="https://www.google.com" className="btn btn-warning">FREE TRAIL</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        <hr />
    </div>
  );
}

export default DataTable;
