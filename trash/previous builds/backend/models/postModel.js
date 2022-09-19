import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Post = db.define('posts',{
    title:{
        type: DataTypes.STRING
    },
    body:{
        type: DataTypes.TEXT('medium')
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    category_id:{
        type: DataTypes.INTEGER
    },
    author:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.BLOB
    },
    pstatus:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});
 
export default Post;
