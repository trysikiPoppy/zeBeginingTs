import React, { useEffect, useState } from 'react';
import './HomePage.css';

function HomePage(): React.JSX.Element {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="home-page-container">
      <video autoPlay loop muted className="background-video">
        <source src="/src/assets/space.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`content ${showContent ? 'visible' : 'hidden'}`}>
        <h1>Welcome to the NASA API Project</h1>
        <p>
          Explore the wonders of space with live streams, interactive star maps, and the latest data from NASA.
        </p>
        <div className="buttons-container">
          <a href="/nasa" className="button">NASA Data</a>
          <a href="/live-stream" className="button">Live Stream</a>
          <a href="/stellarium" className="button">Star Map</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
