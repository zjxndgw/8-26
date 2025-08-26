const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');
const { calculateIncome } = require('./utils/payment');

const authRouter = require('./routes/auth');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
const workersRouter = require('./routes/workers');
const adminRouter = require('./routes/admin');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/users', usersRouter);
app.use('/api/workers', workersRouter);
app.use('/api/admin', adminRouter);

app.listen(port,()=>console.log('Server running on port',port));
