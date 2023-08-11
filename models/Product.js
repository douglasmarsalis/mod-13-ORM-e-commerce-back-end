// Imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Imports our database connection from config.js
const sequelize = require('../config/connection');

// Initializes Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Sets up fields and rules for Product model
Product.init(
// Defined columns
  {
    id: {                       // Added this code
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {            // Added this code
      type: DataTypes.STRING,
      allowNull: false
    }, 
    price: {                   // Added this code
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {                  // Added this code
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {            // Added this code
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
// Link to database connection    
    sequelize, 
    timestamps: false,         // Sets the time stamp to false to remove fields   
    freezeTableName: true,     // Stops the auto-pluralization performed by Sequelize - Sequelize will infer the table name to be equal to the model name without modification
    underscored: true,         // Converts camelCase to underscore
    modelName: 'product',      // Sets the table name inside the database
  }
);

module.exports = Product;
