/**
 * 用户模块路由表
 * 1、员工/管理登录
 * 2、系统管理添加员工
 * 3、项目管理员添加员工
 */

const express = require("express");
const Router = express.Router();
const Users = require("../../controllers/Users");

// 管理员/员工(项目管理员)登录
Router.get("/login", Users.login);

// 管理员/员工(项目管理员)管理员工
Router.route("/manage")
  .get(Users.queryUserList)
  .post(Users.addUser)
  .put(Users.updateUser)
  .delete(Users.deleteUser);

module.exports = Router;
