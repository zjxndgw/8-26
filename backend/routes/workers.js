const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/apply', async(req,res)=>{
    const { user_id } = req.body;
    await pool.execute('UPDATE users SET is_worker_pending=TRUE WHERE id=?',[user_id]);
    res.json({success:true,msg:'申请已提交，请等待管理员审核'});
});

router.post('/start', async(req,res)=>{
    const { user_id } = req.body;
    await pool.execute('UPDATE users SET worker_status="on" WHERE id=?',[user_id]);
    res.json({success:true,msg:'已上班'});
});

router.post('/stop', async(req,res)=>{
    const { user_id } = req.body;
    await pool.execute('UPDATE users SET worker_status="off" WHERE id=?',[user_id]);
    res.json({success:true,msg:'已下班'});
});

router.get('/my-orders', async(req,res)=>{
    const { worker_id } = req.query;
    const [rows] = await pool.execute('SELECT * FROM orders WHERE assigned_worker=?',[worker_id]);
    res.json(rows);
});

module.exports = router;
