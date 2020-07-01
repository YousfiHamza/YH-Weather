if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const API_KEY = process.env.WEATHERSTACK_API_KEY;
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const url = `https://api.weatherstack.com/current
  ?access_key=${API_KEY}
  &query= ${req.body.latitude},${req.body.longitude}&units = m`;
  axios({
    url: url,
    responseType: "json",
  }).then((data) => console.log(res.json(data.data)));
});

app.listen(3003, () => {
  console.log("server started on PORT 3003");
});
