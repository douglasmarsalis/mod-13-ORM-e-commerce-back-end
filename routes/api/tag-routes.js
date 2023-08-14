const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Finds all tags
// Includes its associated Product data
// Will display status 500 if not found
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
      model: Product,
      through: ProductTag,
      as: 'productTag_tag'
      }
    ]
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error!' });
  });
});

// Finds a single tag by its `id`
// Includes its associated Product data
// Will display status 404 or 500 if not found
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag,
        as: 'productTag_product'
      }
    ]
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'Sorry, no tag exists with this id!' });
        return;
      }
      res.json(tagData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

// Creates a new tag
// Will display status 500 if not found
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

// Updates a tag's name by its `id` value
// Will display status 404 or 500 if not found
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'Sorry, no tag exists with this id!' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

// Deletes on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'Sorry, no tag exists with this id!' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error!' });
    });
});

module.exports = router;
