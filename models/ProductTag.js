const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
// Defined columns
  {
    id: {                       // Added this code
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {               // Added this code
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {                   // Added this code
      type: DataTypes.INTEGER,
      references: {
        model: 'model',
        key: 'id'
      }
    }
  },
  {
// Link to database connection    
    sequelize,   
    timestamps: false,          // Set the time stamp to false to remove fields 
    freezeTableName: true,      // Stops the auto-pluralization performed by Sequelize
    underscored: true,          // Converts camelCase to underscore
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
