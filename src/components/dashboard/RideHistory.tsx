
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HistoryRide {
  id: number;
  date: string;
  passenger: string;
  route: string;
  price: string;
  rating: number;
}

interface RideHistoryProps {
  rides: HistoryRide[];
}

const RideHistory: React.FC<RideHistoryProps> = ({ rides }) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Corridas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {rides.map((ride) => (
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
};

export default RideHistory;
