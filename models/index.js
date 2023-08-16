// Imported models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category: Associates the Products model with the Category model
// Adds the Category id attribute to the Product model as the foreign key constraint  - Added this code
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products: hasMany method is used to create 1 to many 
// associations between 2 sequelized models. Here Category will have many Products    - Added this code
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag): belongsToMany method is used
// to create a many-to-many association between 2 tables. Those two tables will require
// a third table that acts as the junction or join table. 
// Each record in the junction table will keep track of the primary keys of both models. - Added this code
Product.belongsToMany(Tag, {
  through: ProductTag,
 // as: 'productTag_tag',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag) - Added this code
Tag.belongsToMany(Product, {
  through: ProductTag,
 // as: 'productTag_product',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
