
import React from 'react';
import ReactPlayer from 'react-player';

function LiveStreamPage(): React.JSX.Element {
  return (
    <div className="page-container">
      <h1>Live Stream from Space</h1>
      <div className="player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/live/xRPjKQtRXR8"
          className="react-player"
          playing
          width="100%"
          height="100%"
          controls
        />
      </div>
      <p>
        Watch this live stream from the International Space Station (ISS). You can see the Earth from space in real-time.
      </p>
    </div>
  );
}

export default LiveStreamPage;
