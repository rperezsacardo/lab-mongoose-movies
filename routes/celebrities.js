const express = require('express');
const Celebrity = require('./../models/celebrity.js');
const celebritiesRouter = new express.Router();
celebritiesRouter.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});
celebritiesRouter.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

celebritiesRouter.get('/create', (req, res, next) => {
  res.render('celebrities/create');
});
module.exports = celebritiesRouter;
