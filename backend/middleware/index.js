/**
 * 中间件配置
 */

const csrf = require('csurf');
const cors = require('cors');
const session = require('express-session');
const config = require('config');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morganMiddleware = require('../middleware/mogan');
const routes = require('../routes');

module.exports = (app) => {
  app.use(cors());  // cors跨域
  app.use(session(config.get('session'))); // session 配置
  app.use(cookieParser());  // cookie解析
  app.use(bodyParser.json()); // 解析参数
  app.use(csrf({ cookie: true }));  // CSRF防护
  app.use(morganMiddleware);  // 注册日志中间件
  app.use('/api/v1', routes); // 注册路由并配置统一前缀
};
