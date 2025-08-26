import React, { useEffect, useState } from 'react';
import { fetchDailyIncome, updateIncomeStatus } from '../api/adminApi';

function AdminIncome(){
  const [incomeList,setIncomeList] = useState([]);
  useEffect(()=>{ load(); },[]);
  const load=async()=>{ const data=await fetchDailyIncome(); setIncomeList(data); }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">接单员收入</h2>
      <ul>
        {incomeList.map(i=>(
          <li key={i.worker_id} className="border p-2 my-1 rounded">
            {i.nickname} - 收入: {i.total_income} - 订单数: {i.order_count}
            <button onClick={async()=>{ await updateIncomeStatus(i.worker_id,'已结'); load(); }} className="ml-2 px-1 py-0.5 bg-green-500 text-white rounded">结单</button>
            <button onClick={async()=>{ await updateIncomeStatus(i.worker_id,'未结'); load(); }} className="ml-1 px-1 py-0.5 bg-red-500 text-white rounded">未结</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminIncome;
