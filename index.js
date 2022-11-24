const express = require("express");

const server = express();

server.use(express.json());

const Farmers = require("./api/farmers/farmers-model");

server.get("/markets", (req, res) => {
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

// OTHER ENDPOINTS
server.get("/", (req, res) => {
  res.send(`
    <h2>Farmer Markets API</h>
  `);
});

server.listen(process.env.PORT || 4000, () => {
  console.log(
    `\n*** Server Running on http://localhost:${process.env.PORT}   ***\n`
  );
});
