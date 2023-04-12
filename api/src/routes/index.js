const express = require("express");
const characters = require("./characters");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola");
});

router.use("/rickandmorty", characters);

module.exports = router;
