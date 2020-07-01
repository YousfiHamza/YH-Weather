if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

const axios = require("axios");
const http = require("http");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.static("public"));

const server = http.createServer(app);

app.post("/weather", (req, res) => {
  console.log(req.body);
  const url = `https://api.weatherstack.com/current
  ?access_key=${API_KEY}
  &query= ${req.body.latitude},${req.body.longitude}&units = m`;
  axios({
    url: url,
    responseType: "json",
  }).then((data) => res.json(data.data));
});

server.listen(PORT, console.log(`The Server Started on Port :  ${PORT} ...`));
