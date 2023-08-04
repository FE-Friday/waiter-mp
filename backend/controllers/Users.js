/**
 * Users 控制器
 */

const User = require("../models/User");
const ResponseCode = require("../utils/ResponseCode");
const Logger = require("../utils/logger");

module.exports = {
  login (req, res) {
    res.status(200).json(ResponseCode.commonCode());
  },

  async queryUserList(req, res) {
    try {
      const user = await User.queryUserList();
      res.status(200).json(ResponseCode.commonCode(user));
    } catch (err) {
      res.status(500).json(ResponseCode.serverErrorCode(err));
    }
  },

  addUser(req, res) {
    res.status(200).json(ResponseCode.commonCode());
  },

  updateUser(req, res) {
    res.status(200).json(ResponseCode.commonCode());
  },

  deleteUser(req, res) {
    res.status(200).json(ResponseCode.commonCode());
  },
};
