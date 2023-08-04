/**
 * 应用入口
 */

const express = require('express');
const config = require('config');

const registerErrors = require('./middleware/errors');
const registerMiddleware = require('./middleware');
const Logger = require('./utils/logger');
const app = express();

app.disable('x-powered-by');

// 中间件
registerMiddleware(app)

// 错误捕获
registerErrors(app);

// 监听端口
app.listen(config.get('port'), err => {
  if (err) {
    Logger.error(`Start is fail. ${err.message}`);
  } else {
    Logger.info(`Server running at http://localhost:${ config.get('port') }`);
  }
});
