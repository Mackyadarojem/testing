import React from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;