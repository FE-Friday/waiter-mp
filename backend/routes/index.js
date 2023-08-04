/**
 * 路由配置
 */

const express = require("express");
const Router = express.Router();
const users = require("./modules/users");
const auth = require("../middleware/auth");

Router.all("*", auth);

Router.get("/", (req, res) => {
  res.send(`当前环境变量：${process.env.NODE_ENV}`);
});

Router.use("/user", users);

module.exports = Router
