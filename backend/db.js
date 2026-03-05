const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123@Mudar",
    database: "login"
});


db.connect(err =>{
    if(err){
        console.error("Error ao conectar o mysql" + err);
    }
    else{
        console.log("Mysql Conectado com sucesso!");


    }
});

module.exports = db;

