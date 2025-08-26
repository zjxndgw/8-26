const express = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const secretKey = 'yourSecretKey';
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { phone, password, nickname } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await pool.execute('INSERT INTO users (phone, password, nickname) VALUES (?, ?, ?)', [phone, hashedPassword, nickname]);
    res.json({ success: true, msg: '注册成功' });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { phone, password } = req.body;
  const [rows] = await pool.execute('SELECT * FROM users WHERE phone=?', [phone]);
  
  if (rows.length) {
    const isMatch = await bcrypt.compare(password, rows[0].password);
    if (isMatch) {
      const token = jwt.sign({ userId: rows[0].id, role: rows[0].role }, secretKey, { expiresIn: '1h' });
      res.json({ success: true, token });
    } else {
      res.json({ success: false, msg: '密码错误' });
    }
  } else {
    res.json({ success: false, msg: '用户不存在' });
  }
});

module.exports = router;
