
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PaymentsView: React.FC = () => {
  return (
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
};

export default PaymentsView;
