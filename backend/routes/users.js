const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/me', async(req,res)=>{
    const { user_id } = req.query;
    const [rows] = await pool.execute('SELECT id,phone,nickname,signature,role,credit,worker_status FROM users WHERE id=?',[user_id]);
    res.json(rows[0]||null);
});

router.put('/update', async(req,res)=>{
    const { user_id,nickname,signature } = req.body;
    await pool.execute('UPDATE users SET nickname=?,signature=? WHERE id=?',[nickname,signature,user_id]);
    res.json({success:true,msg:'修改成功'});
});

module.exports = router;
