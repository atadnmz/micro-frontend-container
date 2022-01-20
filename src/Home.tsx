import React from 'react';
import './Home.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
      <Link
        to="/prohibited-dive-sites"
        style={{ textDecoration: 'none', width: '45%' }}
      >
        <Card className="home-card">
          <p>Prohibited Dive Sites</p>
        </Card>
      </Link>
      <Link to="/weather" style={{ textDecoration: 'none', width: '45%' }}>
        <Card className="home-card">
          <p>Weather</p>
        </Card>
      </Link>
      <Link to="/fish-species" style={{ textDecoration: 'none', width: '45%' }}>
        <Card className="home-card">
          <p>Fish Species</p>
        </Card>
      </Link>
    </div>
  );
}

export default Home;
