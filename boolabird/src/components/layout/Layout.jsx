import React from 'react';
import Navbar from '@components/ui/Navbar';


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
     
    </div>
  );
};

export default Layout;