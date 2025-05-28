
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CurrentRide {
  passenger: string;
  pickup: string;
  destination: string;
  distance: string;
  price: string;
  rating: number;
}

interface TripViewProps {
  currentRide: CurrentRide | null;
  onFinishRide: () => void;
}

const TripView: React.FC<TripViewProps> = ({ currentRide, onFinishRide }) => {
  if (!currentRide) return null;

  return (
    <div className="space-y-6">
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
            onClick={onFinishRide}
            className="w-full bg-gray-600 hover:bg-gray-700"
          >
            Finalizar Corrida
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TripView;
