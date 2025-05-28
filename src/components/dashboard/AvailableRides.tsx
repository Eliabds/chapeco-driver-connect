
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface Ride {
  id: number;
  passenger: string;
  pickup: string;
  destination: string;
  distance: string;
  price: string;
  rating: number;
}

interface AvailableRidesProps {
  rides: Ride[];
  onAcceptRide: (ride: Ride) => void;
}

const AvailableRides: React.FC<AvailableRidesProps> = ({ rides, onAcceptRide }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Corridas Disponíveis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {rides.map((ride) => (
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
                onClick={() => onAcceptRide(ride)}
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
  );
};

export default AvailableRides;
