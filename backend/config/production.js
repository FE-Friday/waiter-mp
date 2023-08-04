module.exports = {
  // 服务监听端口
  port: 7003,

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
