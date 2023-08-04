/**
 * error code 配置
 */

class ResponseCode {
  // 成功通用状态模版
  commonCode (data = {}) {
    return {
      code: 200,
      success: true,
      message: '操作成功',
      data: data
    }
  }

  // 错误通用状态模版
  serverErrorCode (err, data = {}) {
    return {
      code: err.status || 500,
      success: false,
      message: err.message,
      data: data
    }
  }

  // 404 错误
  notFindResource () {
    return {
      code: 404,
      success: false,
      message: "请求的资源不存在",
      data: {}
    }
  }
}

module.exports = new ResponseCode;
