
import React from 'react';

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  return (
    <div className="chapeco-gradient text-white p-4">
      <h1 className="text-xl font-bold">ChapecoDriver</h1>
      <p className="text-green-100">Olá, {userName}</p>
    </div>
  );
};

export default DashboardHeader;
