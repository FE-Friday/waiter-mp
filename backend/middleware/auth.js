/**
 * 全局中间件
 */
// const Logger = require("../utils/logger");
module.exports = (req, res, next) => {
  console.log('全局中间件执行了...');
  // console.log(req.cookies['X-CSRF-TOKEN'], req.csrfToken());
  // console.log(req.headers);
  // res.cookie('X-CSRF-TOKEN', req.csrfToken());
  // res.header('X-CSRF-TOKEN', req.csrfToken());
  next();
}