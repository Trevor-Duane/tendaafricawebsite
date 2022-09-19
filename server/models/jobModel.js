import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Job = db.define('jobs',{
    title:{
        type: DataTypes.STRING
    },
    body:{
        type: DataTypes.TEXT('medium')
    },
    user_id:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});
 
export default Job;
