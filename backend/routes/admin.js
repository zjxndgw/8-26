const express = require('express');
const router = express.Router();
const pool = require('../db');
const { calculateIncome } = require('../utils/payment');

router.get('/pending-workers', async(req,res)=>{
    const [rows] = await pool.execute('SELECT id,nickname,phone FROM users WHERE is_worker_pending=TRUE');
    res.json(rows);
});

router.post('/approve-worker', async(req,res)=>{
    const { user_id, approve } = req.body;
    if(approve){
        await pool.execute('UPDATE users SET role="worker",is_worker_pending=FALSE WHERE id=?',[user_id]);
    }else{
        await pool.execute('UPDATE users SET is_worker_pending=FALSE WHERE id=?',[user_id]);
    }
    res.json({success:true});
});

router.get('/daily-income', async(req,res)=>{
    const { date } = req.query;
    const [rows] = await pool.execute(
        `SELECT w.id AS worker_id, w.nickname, SUM(i.income) AS total_income, COUNT(i.id) AS order_count
         FROM worker_income i
         JOIN users w ON i.worker_id=w.id
         WHERE DATE(i.created_at)=?
         GROUP BY w.id`,[date]
    );
    res.json(rows);
});

router.post('/update-income-status', async(req,res)=>{
    const { worker_id,status } = req.body;
    await pool.execute('UPDATE worker_income SET status=? WHERE worker_id=? AND status="未结"',[status,worker_id]);
    res.json({success:true});
});

module.exports = router;
