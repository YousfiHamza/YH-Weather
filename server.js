if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

const axios = require("axios");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const params = {
    access_key: API_KEY,
    query: `${req.body.latitude},${req.body.longitude}`,
  };
  axios
    .get("http://api.weatherstack.com/current", { params })

    .then((data) => res.json(data.data.current))
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, console.log(`The Server Started on Port :  ${PORT} ...`));
