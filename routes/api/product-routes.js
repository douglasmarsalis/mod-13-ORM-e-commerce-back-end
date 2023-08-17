const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// Gets all products
// Finds all products
// And includes its associated Category and Tag data
// Will display status 500 if not found
router.get('/', (req, res) => {
  Product.findAll({
    include: [
      {
        model: Category
      },
      {
        model: Tag,
        //attributes: ['tag_name'],
        through: ProductTag,
        //as: 'productTag'
      }
    ]
  })
    .then(productData => res.json(productData))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

// Gets one product
// Finds a single product by its `id`
// And includes its associated Category and Tag data
// Will display status 404 or 500 if not found
router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Category
      },
      {
        model: Tag,
        //attributes: ['tag_name'],
        through: ProductTag,
        //as: 'ProductTag'
      }
    ]
  })
    .then(ProductData => {
      if (!ProductData) {
        res.status(404).json({ message: 'Sorry, no poduct exists with this id!' });
        return;
      }
      res.json(ProductData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

// Creates new product
// This code was already given!
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // If there's product tags, we need to create pairings to bulk create in the ProductTag model
      // This code was already given!
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // If no product tags, just respond
      // This code was already given!
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Updates product
router.put('/:id', (req, res) => {
  // Updates product data
  // This code was already given!
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {

        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          // This code was already given!
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          // This code was already given!
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// Deletes one product by its `id` value
// Will display status 404 or 500 if not found
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(productData => {
      if (!productData) {
        res.status(404).json({ message: 'Sorry, no product exists with this id!' });
        return;
      }
      res.json(productData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

module.exports = router;
