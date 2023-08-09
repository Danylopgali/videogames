const {  DataTypes, Sequelize} = require("sequelize");

module.exports =(sequelize)=>{
    sequelize.define("genres",{
        id:{
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey:true,
        },
        genre:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{timestamps:false})
}