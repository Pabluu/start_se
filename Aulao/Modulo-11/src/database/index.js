const mysql = require('mysql2/promise');
const connectToMySql = async () => {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    

    const config = {
        host: "localhost",
        user: "root",
        password: "root286",
        database: "universidade"
    }

    const connection = await mysql.createConnection(config);
    console.log("Conexão realizada com sucesso");
    return global.connection = connection;
}

connectToMySql();

module.exports = { connectToMySql };