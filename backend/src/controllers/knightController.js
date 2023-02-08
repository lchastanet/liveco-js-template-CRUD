const models = require("../models");

const browse = (req, res) => {
  models.knight
    .findAll()
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.knight
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const knight = req.body;

  // TODO validations (length, format...)

  knight.id = parseInt(req.params.id, 10);

  models.knight
    .update(knight)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const knight = req.body;

  // TODO validations (length, format...)

  models.knight
    .insert(knight)
    .then(([result]) => {
      res.location(`/knights/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.knight
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, read, edit, add, destroy };
