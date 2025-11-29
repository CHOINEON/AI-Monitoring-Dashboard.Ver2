
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout'; 
import DashboardPage from './pages/DashboardPage';
import HHPSGuidancePage from './pages/HHPSGuidancePage';
import RHDSGuidancePage from './pages/RHDSGuidancePage';
import XAIPage from './pages/XAIPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/hhps" element={<HHPSGuidancePage />} />
          <Route path="/rhds" element={<RHDSGuidancePage />} />
          <Route path="/xai" element={<XAIPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;