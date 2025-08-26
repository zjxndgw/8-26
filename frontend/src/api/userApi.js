export async function getUserInfo(){ return fetch('/api/users/me').then(r=>r.json()); }
export async function updateUserInfo(data){ return fetch('/api/users/update',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).then(r=>r.json()); }
