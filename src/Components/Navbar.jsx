// src/components/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="flex flex-col  bg-gray-800 w-56 max-sm:w-16 max-sm:w-24">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center bg-blue-600 m-2 rounded-md h-16">
          <span className="text-white text-lg font-semibold">Admin</span>
          <span className="text-white text-lg font-semibold">Gemba Infotech</span>
        </div>
        <div className="flex flex-col items-center mt-4">
          <Link to="/" className={`py-2 px-4 rounded-md text-white text-sm hover:bg-gray-700 hover:text-white ${location.pathname === '/' && 'bg-blue-600'}`}>Page 1</Link>
          <Link to="/dashboard" className={`py-2 px-4 rounded-md text-white text-sm hover:bg-gray-700 hover:text-white ${location.pathname === '/dashboard' && 'bg-blue-600'}`}>Page 2</Link>
          <Link to="/#" className={`py-2 text-white px-4 rounded-md text-sm hover:bg-gray-700 hover:text-white ${location.pathname === '/page3' && 'bg-blue-600'}`}>Page 3</Link>
        </div>
      </div>
      <div className="flex flex-col flex-grow bg-gray-100">
        {/* Page Content Goes Here */}
      </div>
    </div>
  );
}

export default Navbar;
