const express = require("express");
const axios = require("axios");

const app = express();

app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get("http://product-service/products");

    res.json({
      orderId: 101,
      products: response.data
    });
  } catch (error) {
    res.status(500).send("Error contacting product service");
  }
});

app.listen(4000, () => {
  console.log("Order service running on port 4000");
});
