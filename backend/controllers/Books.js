/**
 * Books 控制器
 */

const User = require("../models/User");
const ResponseCode = require("../utils/ResponseCode");
const Logger = require("../utils/logger");

module.exports = {
  async query(req, res) {
    try {
      const user = await User.queryUserList();
      res.status(200).json(ResponseCode.commonCode(user));
    } catch (err) {
      res.status(500).json(ResponseCode.serverErrorCode(err));
    }
  },

  add(req, res) {
    res.send("add添加一本书");
  },

  put(req, res) {
    res.send("put更新一本书");
  },

  delete(req, res) {
    res.send("delete删除一本书");
  },
};
