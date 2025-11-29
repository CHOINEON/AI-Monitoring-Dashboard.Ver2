import React from 'react';
import { Link } from 'react-router-dom';
import useAppStore from '../../hooks/useAppStore'; 
// 추후 아이콘 임포트 예정
// import { ReactComponent as HomeIcon } from '../../assets/icons/dashboard.svg';
// import { ReactComponent as HhpsIcon } from '../../assets/icons/hhps.svg';
// import { ReactComponent as RhdsIcon } from '../../assets/icons/rhds.svg';
// import { ReactComponent as XaiIcon } from '../../assets/icons/xai.svg';

const navItems = [
   { to: "/", label: "홈 (대시보드)", icon: "🏠" }, 
   { to: "/hhps", label: "HHPS 가이던스", icon: "📊" }, 
   { to: "/rhds", label: "RHDS 가이던스", icon: "📈" }, 
   { to: "/xai", label: "Explainable AI", icon: "💡" }, 
];

const Sidebar = () => {
    // 테마 상태 및 토글 함수
    const { theme, toggleTheme } = useAppStore(); 

    return (
        <aside style={{ width: '200px', backgroundColor: '#333', color: 'white', padding: '15px' }}>
            <h2>SK Energy</h2>
            <nav>
                {navItems.map(item => (
                    <div key={item.to} style={{ margin: '15px 0', display: 'flex', alignItems: 'center'  }}>
                        <Link to={item.to} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <item.icon style={{width: '24px' , height: '24px', marginRight: '10px', fill: 'white'}} /> 
                            {item.label}
                        </Link>
                    </div>
                ))}
            </nav>
            
            <div style={{ position: 'absolute', bottom: '20px' }}>
                [cite_start]{/* 테마 토글 스위치 */}
                <label>
                    {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
                    <input 
                        type="checkbox" 
                        checked={theme === 'dark'} 
                        onChange={toggleTheme} 
                    />
                </label>
            </div>
        </aside>
    );
};

export default Sidebar;