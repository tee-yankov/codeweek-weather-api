'use strict';

const path = require('path');

const config = {
  env: process.env.NODE_ENV || 'dev',
  root: path.normalize(__dirname + '../../'),
  ip: process.env.IP || 'localhost',
  port: process.env.PORT || 9000,
  logType: process.env.LOGTYPE || 'dev',
  secretKey: 'c1cd32fe23335568516576501e27ebe5',
  stzLat: '42.4192551',
  stzLon: '25.6248617'
};

module.exports = config;
