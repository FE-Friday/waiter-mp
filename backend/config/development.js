module.exports = {
  // 服务监听端口
  port: 3000,

  // 管理员账号
  admin: {
    username: 'admin',
    password: '1qaz@WSX'
  },
  
  // mysql数据库连接配置
  dbConfig: {
    connectionLimit: 10,
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'icons_db'
  },
};
