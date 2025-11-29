import React from 'react';
import Header from '@/components/common/Header'; 
import Sidebar from '@/components/common/Sidebar'; 


const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* 4페이지 메뉴와 테마 토글을 포함 사이드바 ( */}
      <Sidebar /> 
      
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
       
        <Header title="No. 2 RHDS Fractionator, Separator 최적화" /> 
        
        <main style={{ padding: '20px', flexGrow: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;