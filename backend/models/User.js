const Base = require('./Base');

class User extends Base {
  // 查询用户列表
  queryUserList () {
    return this.query('SELECT * FROM test');
  }
}

module.exports = new User();
