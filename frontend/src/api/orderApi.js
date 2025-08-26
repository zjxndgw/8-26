export async function fetchOrders(type=''){ return fetch('/api/orders/list'+(type?'?type='+type:'')).then(r=>r.json()); }
