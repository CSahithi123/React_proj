
import React from 'react';
import Login from './Login';
import LoginNew from './LoginNew';
 
const Headernew = () => {
  return (
    
    <>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="resort.png" style={{ width: '40px' }} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/PrivacyPage">
                Privacy
              </a>
            </li>
            
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
            

         
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>

          </ul>
        
        </div>
      </div>
    </nav>

    </>


    
  );
};
 
export default Headernew;