const express = require("express");
const router = express.Router();
const Project = require("../classes/Project.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res) =>
  Project.findAll()
    .then((projects) => {
      console.log(projects);
      res.json(projects);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
