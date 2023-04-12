const express = require("express");

const {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFav,
  getAllChars,
} = require("../controllers/index");

const router = express.Router();


router.get("/character/:id", getCharacterId);
router.get("/all", getAllChars);
router.get("/detail/:detailId", getDetailId);
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
