import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api/orderApi';

function OrderHall() {
  const [orders, setOrders] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => { loadOrders(); }, [type]);

  const loadOrders = async () => {
    const data = await fetchOrders(type);
    setOrders(data);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">订单大厅</h2>
      <div className="mb-2">
        <button className="mr-2" onClick={() => setType('')}>全部</button>
        <button className="mr-2" onClick={() => setType('护航')}>护航</button>
        <button onClick={() => setType('陪玩')}>陪玩</button>
      </div>
      <ul>
        {orders.map(o => (
          <li key={o.id} className="border p-2 my-1 rounded">
            {o.game_name} - {o.type} - {o.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHall;
