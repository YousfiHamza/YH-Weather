if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const WEATHERSTACK_API_KEY = process.env.WEATHERSTACK_API_KEY;
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  console.log(req.body);
});

app.listen(3003, () => {
  console.log("server started on PORT 3003");
});
