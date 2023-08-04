/**
 * init db， 使用连接池
 */

const mysql = require('mysql');
const config = require('config');
const pool = mysql.createPool(config.get('dbConfig'));

class Base {
  // 查询
  query (sql) {
    return new Promise((reslove, reject) => {
      pool.query(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          reslove(rows);
        }
      });
    });
  }

  // 新增
  insert (sql, cb) {

  }

  // 更新
  update (sql, cb) {

  }

  // 删除
  delete (sql, cb) {
    
  }
}

module.exports = Base;

// pool.query('SELECT * FROM test', (err, rows, fields) => {
//   if (err) throw err;
//   console.log('The solution is: ', rows);
// })