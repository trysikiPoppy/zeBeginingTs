import React from 'react';

function StellariumPage(): React.JSX.Element {
  return (
    <div className="page-container">
      <h1>Interactive Star Map</h1>
      <iframe
        title="Interactive Star Map"
        src="https://stellarium-web.org"
        width="100%"
        height="700"
        frameBorder="0"
        allowFullScreen
      />
      <p>Explore the stars and planets with this interactive star map from Stellarium Web.</p>
    </div>
  );
}

export default StellariumPage;
