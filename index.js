'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const NhanVienRoutes = require('./routes/nhanvien.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.options('*', cors());

app.use('/api', NhanVienRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));