
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { MapPin, Clock, DollarSign, Star, Navigation, User, Settings, History, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

  const renderHomeView = () => (
    <div className="space-y-6">
      {/* Status Card */}
      <Card className="border-2 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Status</h2>
              <p className="text-gray-600">
                {isOnline ? 'Você está online e disponível' : 'Você está offline'}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium">
                {isOnline ? 'Online' : 'Offline'}
              </span>
              <Switch
                checked={isOnline}
                onCheckedChange={handleStatusToggle}
                className="data-[state=checked]:bg-green-600"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">{userData.rating}</p>
            <p className="text-sm text-gray-600">Avaliação</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Navigation className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">{userData.totalRides}</p>
            <p className="text-sm text-gray-600">Corridas</p>
          </CardContent>
        </Card>
      </div>

      {/* Available Rides */}
      {isOnline && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Corridas Disponíveis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {availableRides.map((ride) => (
              <div key={ride.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{ride.passenger}</p>
                    <p className="text-sm text-gray-600">⭐ {ride.rating}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {ride.price}
                  </Badge>
                </div>
                <div className="text-sm text-gray-700">
                  <p>📍 {ride.pickup} → {ride.destination}</p>
                  <p>📏 {ride.distance}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => acceptRide(ride)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Aceitar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Recusar
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderTripView = () => (
    <div className="space-y-6">
      {currentRide && (
        <>
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="text-center">Corrida em Andamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-bold">{currentRide.passenger}</h3>
                <p className="text-gray-600">⭐ {currentRide.rating}</p>
              </div>
              
              <div className="space-y-2">
                <p><strong>Embarque:</strong> {currentRide.pickup}</p>
                <p><strong>Destino:</strong> {currentRide.destination}</p>
                <p><strong>Distância:</strong> {currentRide.distance}</p>
                <p><strong>Valor:</strong> {currentRide.price}</p>
              </div>

              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">🗺️ Mapa da rota</p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  📞 Ligar
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  💬 Mensagem
                </Button>
                <Button className="panic-button px-4 py-2 text-sm">
                  PÂNICO
                </Button>
              </div>

              <Button 
                onClick={() => {
                  setCurrentRide(null);
                  setCurrentView('home');
                  toast({
                    title: "Corrida finalizada",
                    description: "Aguarde a avaliação do passageiro",
                  });
                }}
                className="w-full bg-gray-600 hover:bg-gray-700"
              >
                Finalizar Corrida
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );

  const renderHistoryView = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Corridas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {rideHistory.map((ride) => (
            <div key={ride.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{ride.passenger}</p>
                  <p className="text-sm text-gray-600">{ride.date}</p>
                  <p className="text-sm">{ride.route}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{ride.price}</p>
                  <p className="text-sm">⭐ {ride.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const renderPaymentsView = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Resumo Financeiro</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">R$ 145,50</p>
              <p className="text-sm text-gray-600">Hoje</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">R$ 892,30</p>
              <p className="text-sm text-gray-600">Esta semana</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">Método de Recebimento</h4>
            <div className="p-3 border rounded-lg">
              <p className="font-medium">Banco do Brasil</p>
              <p className="text-sm text-gray-600">Ag: 1234-5 | CC: 67890-1</p>
            </div>
            <Button variant="outline" className="w-full">
              Alterar Conta Bancária
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfileView = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Meu Perfil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold">{userData.name}</h3>
            <p className="text-gray-600">{userData.email}</p>
          </div>
          
          <div className="space-y-3">
            <div>
              <Label>Telefone</Label>
              <p className="text-gray-700">{userData.phone}</p>
            </div>
            <div>
              <Label>Avaliação</Label>
              <p className="text-gray-700">⭐ {userData.rating} ({userData.totalRides} corridas)</p>
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full">Editar Perfil</Button>
            <Button variant="outline" className="w-full">Configurações</Button>
            <Button 
              onClick={onLogout}
              variant="destructive" 
              className="w-full"
            >
              Sair
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="chapeco-gradient text-white p-4">
        <h1 className="text-xl font-bold">ChapecoDriver</h1>
        <p className="text-green-100">Olá, {userData.name}</p>
      </div>

      {/* Content */}
      <div className="p-4 pb-20">
        {currentView === 'home' && renderHomeView()}
        {currentView === 'trip' && renderTripView()}
        {currentView === 'history' && renderHistoryView()}
        {currentView === 'payments' && renderPaymentsView()}
        {currentView === 'profile' && renderProfileView()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 gap-1">
          <Button
            variant={currentView === 'home' ? 'default' : 'ghost'}
            className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'home' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            onClick={() => setCurrentView('home')}
          >
            <Navigation className="w-5 h-5" />
            <span className="text-xs">Início</span>
          </Button>
          <Button
            variant={currentView === 'trip' ? 'default' : 'ghost'}
            className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'trip' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            onClick={() => setCurrentView('trip')}
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs">Viagem</span>
          </Button>
          <Button
            variant={currentView === 'history' ? 'default' : 'ghost'}
            className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'history' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            onClick={() => setCurrentView('history')}
          >
            <History className="w-5 h-5" />
            <span className="text-xs">Histórico</span>
          </Button>
          <Button
            variant={currentView === 'payments' ? 'default' : 'ghost'}
            className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'payments' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            onClick={() => setCurrentView('payments')}
          >
            <CreditCard className="w-5 h-5" />
            <span className="text-xs">Ganhos</span>
          </Button>
          <Button
            variant={currentView === 'profile' ? 'default' : 'ghost'}
            className={`rounded-none h-14 flex-col space-y-1 ${currentView === 'profile' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            onClick={() => setCurrentView('profile')}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
