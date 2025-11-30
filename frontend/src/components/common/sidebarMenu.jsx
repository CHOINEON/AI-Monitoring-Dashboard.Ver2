import React from 'react';
import { Menu, Button } from 'antd';
import { HomeOutlined, AreaChartOutlined, LineChartOutlined, BulbOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom'; 

//  Menu items 구성 (Link와 연결)
const getItem = (label, key, icon, children, type) => {
  // antd Menu Item의 label에 Link 컴포넌트 삽입
  const labelWithLink = <Link to={key}>{label}</Link>;
  return {
    key,
    icon,
    label: labelWithLink,
    children,
    type,
  };
};

// 페이지에 맞는 아이콘과 키 값 설정
const menuItems = [
  getItem('홈 (대시보드)', '/', <HomeOutlined />),
  getItem('HHPS 가이던스', '/hhps', <AreaChartOutlined />),
  getItem('RHDS 가이던스', '/rhds', <LineChartOutlined />),
  getItem('Explainable AI', '/xai', <BulbOutlined />),
];

const SidebarMenu = ({collapsed, setCollapsed}) => {
  const location = useLocation(); // 현재 경로

  return (
    <>
      <div style={{ padding: '10px', textAlign: 'right' }}>
        
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined style={{ color: 'white' }} /> : <MenuFoldOutlined style={{ color: 'white' }} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 40,
            height: 40,
          }}
        />
      </div>
      <Menu
        theme="dark" 
        mode="inline"
        selectedKeys={[location.pathname]} 
        items={menuItems}
        style={{ borderRight: 'none' }} 
      />
    </>
  );
};

export default SidebarMenu;