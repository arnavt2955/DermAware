// HistoryPage.js
import React, { useState } from 'react';
import Navbar from './NavBar';
import './HistoryPage.css'; // Import CSS file for styling

function HistoryPage() {
  // State to store history logs (dummy data for demonstration)
  const [historyLogs, setHistoryLogs] = useState([
    { id: 1, dateTime: "2024-04-20 09:30:00", image: "image1.jpg", disease: "Acne" },
    { id: 2, dateTime: "2024-04-20 10:15:00", image: "image2.jpg", disease: "Eczema" },
    { id: 3, dateTime: "2024-04-20 11:00:00", image: "image3.jpg", disease: "Psoriasis" },
    // Add more history logs as needed
  ]);

  return (
    <div className="history-page">
      <div className="title">History</div>
      <div className="wrapper">
        {historyLogs.map(log => (
          <div key={log.id} className="log">
            <div className="image-container">
              <img src={log.image} alt="Skin condition" />
            </div>
            <div className="info">
              <div className="date-time">{log.dateTime}</div>
              <div className="disease">{log.disease}</div>
            </div>
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
}

export default HistoryPage;
