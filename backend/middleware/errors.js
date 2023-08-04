/**
 * error 处理
 */
const ResponseCode = require('../utils/ResponseCode')
module.exports = app => {
  // 404
  app.use((req, res, next) => {
    res.status(404).json(ResponseCode.notFindResource());
  });

  // 全局错误捕获
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json(ResponseCode.serverErrorCode(err));
  });
}
