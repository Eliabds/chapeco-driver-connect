
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Navigation } from 'lucide-react';

interface StatsCardsProps {
  rating: number;
  totalRides: number;
}

const StatsCards: React.FC<StatsCardsProps> = ({ rating, totalRides }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardContent className="p-4 text-center">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-800">{rating}</p>
          <p className="text-sm text-gray-600">Avaliação</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <Navigation className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-800">{totalRides}</p>
          <p className="text-sm text-gray-600">Corridas</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
