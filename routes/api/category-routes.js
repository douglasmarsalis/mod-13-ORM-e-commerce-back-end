const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// Finds all categories and includes its associated Products
// Will display status 500 if not found
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
      model: Product
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error!' });
  });
});

// Finds one category by its `id` value and includes its associated Products
// Will display status 404 or 500 if not found
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
      model: Product
      }
    ]
  })
    .then(categoryData => {
      if(!categoryData) {
        res.status(404).json({ message: 'Sorry, no category exists with this id!' });
        return;
      }
      res.json(categoryData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

// Creates a new category
// Will display status 500 if not found
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error!' });
  });
});

// Updates a category by its `id` value
// Will display status 404 or 500 if not found
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({ message: 'Sorry, no category exists with this id!' });
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error!' });
  });
});

// Deletes a category by its `id` value
// Will display status 404 or 500 if not found
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({ message: 'Sorry, no category exists with this id!' });
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error!' });
  });
});

module.exports = router;
