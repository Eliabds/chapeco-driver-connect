
import React from 'react';
import { Button } from '@/components/ui/button';
import { Navigation, MapPin, History, CreditCard, User } from 'lucide-react';

interface BottomNavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="grid grid-cols-5 gap-1">
        <Button
          variant={currentView === 'home' ? 'default' : 'ghost'}
          className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'home' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
          onClick={() => onViewChange('home')}
        >
          <Navigation className="w-5 h-5" />
          <span className="text-xs">Início</span>
        </Button>
        <Button
          variant={currentView === 'trip' ? 'default' : 'ghost'}
          className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'trip' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
          onClick={() => onViewChange('trip')}
        >
          <MapPin className="w-5 h-5" />
          <span className="text-xs">Viagem</span>
        </Button>
        <Button
          variant={currentView === 'history' ? 'default' : 'ghost'}
          className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'history' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
          onClick={() => onViewChange('history')}
        >
          <History className="w-5 h-5" />
          <span className="text-xs">Histórico</span>
        </Button>
        <Button
          variant={currentView === 'payments' ? 'default' : 'ghost'}
          className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'payments' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
          onClick={() => onViewChange('payments')}
        >
          <CreditCard className="w-5 h-5" />
          <span className="text-xs">Ganhos</span>
        </Button>
        <Button
          variant={currentView === 'profile' ? 'default' : 'ghost'}
          className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'profile' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
          onClick={() => onViewChange('profile')}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Perfil</span>
        </Button>
      </div>
    </div>
  );
};

export default BottomNavigation;
