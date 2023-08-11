const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
// Defined columns  
  {
    id: {                       // Added this code
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {                 // Added this code
      type: DataTypes.STRING
    }
  },
  {
// Link to database connection
    sequelize,
    timestamps: false,          // Set the time stamp to false to remove fields
    freezeTableName: true,      // Stops the auto-pluralization performed by Sequelize
    underscored: true,          // Converts camelCase to underscore
    modelName: 'tag',
  }
);

module.exports = Tag;
