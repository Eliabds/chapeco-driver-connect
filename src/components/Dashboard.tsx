
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import DashboardHeader from './dashboard/DashboardHeader';
import StatusCard from './dashboard/StatusCard';
import StatsCards from './dashboard/StatsCards';
import AvailableRides from './dashboard/AvailableRides';
import TripView from './dashboard/TripView';
import RideHistory from './dashboard/RideHistory';
import PaymentsView from './dashboard/PaymentsView';
import ProfileView from './dashboard/ProfileView';
import BottomNavigation from './dashboard/BottomNavigation';

interface DashboardProps {
  userData: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userData, onLogout }) => {
  const [isOnline, setIsOnline] = useState(userData.isOnline || false);
  const [currentView, setCurrentView] = useState('home');
  const [currentRide, setCurrentRide] = useState(null);
  const { toast } = useToast();

  const availableRides = [
    { id: 1, passenger: 'Maria Santos', pickup: 'Centro', destination: 'São Cristóvão', distance: '3.2 km', price: 'R$ 12,50', rating: 4.9 },
    { id: 2, passenger: 'João Pedro', pickup: 'Efapi', destination: 'Terminal', distance: '5.1 km', price: 'R$ 18,00', rating: 4.7 },
    { id: 3, passenger: 'Ana Silva', pickup: 'Seminário', destination: 'Shopping', distance: '2.8 km', price: 'R$ 10,50', rating: 4.8 }
  ];

  const rideHistory = [
    { id: 1, date: '2024-01-20', passenger: 'Carlos Lima', route: 'Centro → Efapi', price: 'R$ 15,50', rating: 5 },
    { id: 2, date: '2024-01-20', passenger: 'Fernanda Costa', route: 'Seminário → Terminal', price: 'R$ 12,00', rating: 4 },
    { id: 3, date: '2024-01-19', passenger: 'Roberto Silva', route: 'Shopping → Centro', price: 'R$ 8,50', rating: 5 }
  ];

  const handleStatusToggle = () => {
    setIsOnline(!isOnline);
    toast({
      title: isOnline ? "Você está offline" : "Você está online",
      description: isOnline ? "Você não receberá corridas" : "Aguardando corridas...",
    });
  };

  const acceptRide = (ride: any) => {
    setCurrentRide(ride);
    setCurrentView('trip');
    toast({
      title: "Corrida aceita!",
      description: `Dirija-se ao local de embarque: ${ride.pickup}`,
    });
  };

  const finishRide = () => {
    setCurrentRide(null);
    setCurrentView('home');
    toast({
      title: "Corrida finalizada",
      description: "Aguarde a avaliação do passageiro",
    });
  };

  const renderHomeView = () => (
    <div className="space-y-6">
      <StatusCard isOnline={isOnline} onStatusToggle={handleStatusToggle} />
      <StatsCards rating={userData.rating} totalRides={userData.totalRides} />
      {isOnline && (
        <AvailableRides rides={availableRides} onAcceptRide={acceptRide} />
      )}
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return renderHomeView();
      case 'trip':
        return <TripView currentRide={currentRide} onFinishRide={finishRide} />;
      case 'history':
        return <RideHistory rides={rideHistory} />;
      case 'payments':
        return <PaymentsView />;
      case 'profile':
        return <ProfileView userData={userData} onLogout={onLogout} />;
      default:
        return renderHomeView();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName={userData.name} />
      <div className="p-4 pb-20">
        {renderContent()}
      </div>
      <BottomNavigation currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
};

export default Dashboard;
