import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/pages/HomePage';
import NasaPage from './components/pages/NasaPage';
import LiveStreamPage from './components/pages/LiveStreamPage';
import StellariumPage from './components/pages/StellariumPage';

function App(): React.JSX.Element {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nasa" element={<NasaPage />} />
          <Route path="/live-stream" element={<LiveStreamPage />} />
          <Route path="/stellarium" element={<StellariumPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
