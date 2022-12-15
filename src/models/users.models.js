const {DataTypes} =require('sequelize')
const db=require('../utils/database')
const Users =db.define('users',{
   id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
   },
   first_name:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   last_name:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        isEmail:true,
    },
   },
   password:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  birthday:{
    type:DataTypes.DATEONLY,
    allowNull:false,
    defaultValue:'2000/01/01'
  }
})
module.exports=Users