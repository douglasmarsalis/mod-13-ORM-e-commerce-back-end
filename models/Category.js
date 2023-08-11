const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
// Defined columns
  {
    id: {                       // Added this code
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {            // Added this code
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
// Link to database connection    
    sequelize,
    timestamps: false,          // Sets the time stamp to false to remove fields
    freezeTableName: true,      // Stops the auto-pluralization performed by Sequelize - Sequelize will infer the table name to be equal to the model name without modification
    underscored: true,          // Converts camelCase to underscore
    modelName: 'category',      // Sets the table name inside the database
  }
);

module.exports = Category;
