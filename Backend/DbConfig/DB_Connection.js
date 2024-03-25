const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost", // Remove the port from here
  port: 3306, // Specify the port separately
  user: "root",
  password: "Abhi@5755",
  database: "qwerty",
});

module.exports = db;
