import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ChevronDown } from 'lucide-react';

const OrderCard = ({ order }) => (
  
  <Card className="mb-4">
    <CardHeader className="flex flex-wrap justify-between items-center">
      <OrderInfo label="ORDER PLACED" value={order.listingdate} />
      <OrderInfo label="TOTAL" value={order.itemprice} />
      <OrderInfo label="SHIP TO" value={order.shipTo} icon={<ChevronDown />} />
      <OrderActions orderId={order.itemno} />
    </CardHeader>
  </Card>
);

const OrderInfo = ({ label, value, icon }) => (
  <div className="mb-2 sm:mb-0">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold flex items-center">
      {value} {icon && <span className="ml-1">{icon}</span>}
    </p>
  </div>
);

const OrderActions = ({ orderId }) => (
  <div className="text-right">
    <p className="text-sm text-gray-500">ORDER # {orderId}</p>
    <Button variant="link" className="p-0">View order details</Button>
  </div>
);

export default OrderCard;