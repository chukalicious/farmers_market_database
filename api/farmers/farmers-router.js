const express = require("express");
const Farmers = require("./farmers-model");
const router = express.Router();

router.get("/", (req, res) => {
  Farmers.find()
    .then((markets) => {
      if (markets) {
        res.status(200).json(markets);
      } else {
        res.status(404).json({ message: "there are no markets at the moment" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the markets",
      });
    });
});

module.exports = router;
