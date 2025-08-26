import React from 'react';
import { applyWorker } from '../api/workerApi';

function WorkerApply() {
  const submit = async () => { await applyWorker(); alert('申请已提交'); }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">接单员申请</h2>
      <button onClick={submit} className="px-2 py-1 bg-blue-500 text-white rounded">提交申请</button>
    </div>
  );
}

export default WorkerApply;
