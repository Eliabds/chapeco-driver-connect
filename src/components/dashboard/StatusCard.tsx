
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

interface StatusCardProps {
  isOnline: boolean;
  onStatusToggle: () => void;
}

const StatusCard: React.FC<StatusCardProps> = ({ isOnline, onStatusToggle }) => {
  return (
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
              onCheckedChange={onStatusToggle}
              className="data-[state=checked]:bg-green-600"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
