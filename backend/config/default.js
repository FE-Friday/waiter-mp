/**
 * app config
 */

module.exports = {
  // session 配置
  session: {
    secret: "12345",
    name: "name",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true
  },
  // 日志配置
  logger: {
    error(message) {
      console.log("[icons error]", message);
    },
  },
};
