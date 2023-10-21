import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
    const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

    return (
      <div className="relative min-h-screen md:flex">
        <Sidebar setExpand={setSideMenuIsExpand} />
        <div
          className={`flex-1 
          min-h-screen 
          mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
            sideMenuIsExpand ? "ml-72" : "ml-20"
          }`}
        >
            <Outlet />
        </div>
      </div>
    );
}