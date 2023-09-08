const express = require("express");
const bodyParser = require("body-parser");
const qr = require("qr-image");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/generate", (req, res) => {
  const url = req.body.url;
  //   console.log("URL:", url);

  const qr_svg = qr.image(url, { type: "png" });
  const filePath = path.join(__dirname, "./public/qr-img.png");
  qr_svg.pipe(fs.createWriteStream(filePath));

  res.sendFile(__dirname + "/index.html");
});

// Display initial QR code when the page loa
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
