var mysql = require("mysql");


let connectionInfo;

if(process.env.JAWSDB_URL) {
    connectionInfo = process.env.JAWSDB_URL;
} else {
    connectionInfo = {
        host:process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    };
}

const connection = mysql.createConnection(connectionInfo);


// var connection; 

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "rootpw",
//     database: "burgers_db"
//   });
// };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;