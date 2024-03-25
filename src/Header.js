
import React from 'react';
 
const Header = () => {
  return (
    
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
              <a className="nav-link" href="/Front">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/PrivacyPage">
                Privacy
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Content Management
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/VillaCrud">
                    Villa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/VillaNumberCrud">
                    VillaNumber
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/AmenityCrud">
                    Amenity
                  </a>
                </li>
               {/* <li>
                  <a className="dropdown-item" href="/Booking">
                    Booking
                  </a>
                </li> */}
                
              </ul>
            </li>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
            

         
            <li className="nav-item">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>

    
  );
};
 
export default Header;