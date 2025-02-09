module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull : false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      imageUrl:{
        type : DataTypes.STRING,
        allowNull : true
      }
   
      
    
    });
    return Blog;
  };