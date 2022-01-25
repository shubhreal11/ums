const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ums',
    multipleStatements:true
  });

  connection.connect((err)=>{
      if(err){
          return console.log(err);
      }
      console.log('database connected !')
    })

  module.exports=connection;