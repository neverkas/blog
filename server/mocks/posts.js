module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [
        {id: 0, 'title': 'Post 1', 'description': 'bla bla bla..'},
        {id: 1, 'title': 'Post 2', 'description': 'ble ble ble..'},
        {id: 2, 'title': 'Post 3', 'description': 'blo blo blo..'},
        {id: 3, 'title': 'Post 4', 'description': 'glu glu glu..'},
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
