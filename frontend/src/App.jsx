import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, theme } from 'antd'; 
import MainLayout from './components/common/MainLayout';
import SidebarMenu from './components/common/sidebarMenu';
import DashboardPage from './pages/DashboardPage';
import HHPSGuidancePage from './pages/HHPSGuidancePage';
import RHDSGuidancePage from './pages/RHDSGuidancePage';
import XAIPage from './pages/XAIPage';

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: {colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>

      <Sider 
          trigger={null} 
          collapsible 
          collapsed={collapsed}
          theme="dark" // 또는 light
        >
          <div className="demo-logo" />
          <SidebarMenu collapsed={collapsed} setCollapsed={setCollapsed}/>
        </Sider>

        <MainLayout 
          colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}
        >
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/hhps" element={<HHPSGuidancePage />} />
            <Route path="/rhds" element={<RHDSGuidancePage />} />
            <Route path="/xai" element={<XAIPage />} />
          </Routes>
        </MainLayout>

      </Layout>
    </BrowserRouter>
  )
}

export default App;