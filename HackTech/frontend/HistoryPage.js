// HistoryPage.js
import React from 'react';
import Navbar from './NavBar';
import './HistoryPage.css'; // Import CSS file for styling

function HistoryPage() {
  return (
    <div className="history-page">
      <div className="title">History</div>
      <div className="wrapper">
        {/* Add your input logs or skin detection results here */}
        <div className="log">Log 1</div>
        <div className="log">Log 2</div>
        <div className="log">Log 3</div>
        {/* Add more logs as needed */}
      </div>
      <Navbar />
    </div>
  );
}

export default HistoryPage;
