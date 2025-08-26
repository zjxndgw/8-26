export async function fetchPendingWorkers(){ return fetch('/api/admin/pending-workers').then(r=>r.json()); }
export async function approveWorker(user_id,approve){ return fetch('/api/admin/approve-worker',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user_id,approve})}).then(r=>r.json()); }
export async function fetchDailyIncome(){ return fetch('/api/admin/daily-income').then(r=>r.json()); }
export async function updateIncomeStatus(worker_id,status){ return fetch('/api/admin/update-income-status',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({worker_id,status})}).then(r=>r.json()); }
