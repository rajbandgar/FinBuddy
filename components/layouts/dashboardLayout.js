"use client"

import React, { useContext } from 'react'
import { UserContext } from '@/context/userContext';
import SideMenu from '@/components/layouts/SideMenu';
import Navbar from '@/components/layouts/Navbar';


const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext (UserContext);

  return (
    <div className=''>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className='flex'>
          {/* Side menu: hidden on small screens, shown on large */}
          <div className='hidden lg:block'>
            <SideMenu activeMenu={activeMenu} />
          </div>

          {/* Main content */}
          <div className='grow mx-5'>{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;

