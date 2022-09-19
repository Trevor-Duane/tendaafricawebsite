import React from 'react';
import Sidebar from '../Components/SidebarComponent/Sidebar';
import './layout.css';

function Layout({children}) {
  return (
    <div className="layoutWrapper">
        <div className="layout">
            {children}
        </div>
        <div className="sidebar">
            <Sidebar />
        </div>
    </div>
  )
}

export default Layout