const Model = require('../models').Spaces;

module.exports = {
  create(req, res) {
    return Model
      .create({
        column1: req.body.title,
      })
      .then(spaces => res.status(201).send(spaces))
      .catch(error => res.status(400).send(error));
  },
};
