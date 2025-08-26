import React, { useEffect, useState } from 'react';
import { fetchPendingWorkers, approveWorker } from '../api/adminApi';

function AdminWorkerApprove(){
  const [workers,setWorkers] = useState([]);

  useEffect(()=>{ load(); },[]);
  const load=async()=>{ const data=await fetchPendingWorkers(); setWorkers(data); }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">接单员审核</h2>
      <ul>
        {workers.map(w=>(
          <li key={w.id} className="border p-2 my-1 rounded">
            {w.nickname} - {w.phone}
            <button onClick={async()=>{ await approveWorker(w.id,true); load(); }} className="ml-2 px-1 py-0.5 bg-green-500 text-white rounded">通过</button>
            <button onClick={async()=>{ await approveWorker(w.id,false); load(); }} className="ml-1 px-1 py-0.5 bg-red-500 text-white rounded">拒绝</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminWorkerApprove;
