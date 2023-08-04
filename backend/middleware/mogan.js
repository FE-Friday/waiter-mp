/**
 * morgan http 级别日志坚挺
 */

const morgan = require('morgan');
const Logger = require('../utils/logger');

const morganConfig = {
  stream: {
    write: message => Logger.http(message)
  },
  skip: () => {
    const env = process.env.NODE_ENV || "development";
    return env !== 'development';
  }
}

module.exports = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    stream: morganConfig.stream,
    skip: morgan.skip
  }
);
