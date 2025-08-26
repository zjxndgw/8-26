export async function applyWorker(){ return fetch('/api/workers/apply',{method:'POST'}).then(r=>r.json()); }
export async function startWork(){ return fetch('/api/workers/start',{method:'POST'}).then(r=>r.json()); }
export async function stopWork(){ return fetch('/api/workers/stop',{method:'POST'}).then(r=>r.json()); }
