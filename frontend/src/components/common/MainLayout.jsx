import React from 'react';
import { Layout, Button, Menu, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import SidebarMenu from './sidebarMenu'; 
import HeaderContent from './HeaderContent.jsx'; 
const { Header, Content } = Layout;

const MainLayout = ({ children, collapsed, setCollapsed, colorBgContainer, borderRadiusLG }) => {

  return (
    <Layout>
      {/* 1. antd Header 적용*/}
      <Header style={{ padding: 0, background: colorBgContainer,}}>

        
        {/* 사용자 정의 헤더 내용 (로고, 제목 등) */}
        <HeaderContent title="No. 2 RHDS Fractionator, Separator 최적화" />
      </Header>
      
      {/* 2. antd Content 적용 */}
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          minWidth: "95vw",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children} {/* Routes 컴포넌트 렌더링될 위치 */}
      </Content>
    </Layout>
  );
};

export default MainLayout;