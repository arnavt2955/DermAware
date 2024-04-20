// Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faSearch, faInfo, faBook } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/history"><FontAwesomeIcon icon={faHistory} /> History</a></li>
        <li><a href="/scan"><FontAwesomeIcon icon={faSearch} /> Scan</a></li>
        <li><a href="/info"><FontAwesomeIcon icon={faInfo} /> Info</a></li>
        <li><a href="/log"><FontAwesomeIcon icon={faBook} /> Quick Log</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
