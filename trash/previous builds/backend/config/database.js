import { Sequelize } from "sequelize";
 
const db = new Sequelize('tenda_db', 'root', 'Computers1996.', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;