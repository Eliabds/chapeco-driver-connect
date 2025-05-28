
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  phone: string;
  rating: number;
  totalRides: number;
}

interface ProfileViewProps {
  userData: UserData;
  onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ userData, onLogout }) => {
  return (
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
};

export default ProfileView;
