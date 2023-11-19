const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
  },
  name:{
      type: DataTypes.STRING,
      allowNull:false,
  },
  descripcion:{
      type: DataTypes.STRING,
      allowNull:false,
  },
  
  plataformas:{
      type: DataTypes.STRING,
      allowNull:false,
  },
  background_image:{
    type: DataTypes.STRING,
    allowNull:false,
},
  rating:  {  type: DataTypes.DECIMAL(4, 1),
  allowNull: true,
  validate: {
    min: 0,
    max: 5,
  },
  },
  fecha_de_lanzamiento:{
      type: DataTypes.DATEONLY,
   
  },
genre:{
  type:DataTypes.ARRAY(DataTypes.STRING),
}

  },{timestamps:false});
  };

