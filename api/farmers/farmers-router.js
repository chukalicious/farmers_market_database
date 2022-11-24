const express = require("express");
const Farmers = require("./farmers-model");
const router = express.Router();

router.get("/", (req, res) => {
  Farmers.find()
    .then((markets) => {
      res.status(200).json(markets);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the markets",
      });
    });
});

module.exports = router;
