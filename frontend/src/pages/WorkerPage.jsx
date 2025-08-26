import React, { useState } from 'react';
import { startWork, stopWork } from '../api/workerApi';

function WorkerPage() {
  const [status, setStatus] = useState('off');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">接单员主页</h2>
      <p>当前状态: {status}</p>
      <button onClick={async () => { await startWork(); setStatus('on'); }} className="mr-2 px-2 py-1 bg-green-500 text-white rounded">上班</button>
      <button onClick={async () => { await stopWork(); setStatus('off'); }} className="px-2 py-1 bg-red-500 text-white rounded">下班</button>
    </div>
  );
}

export default WorkerPage;
