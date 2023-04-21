const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/contact.html"));
});

app.use(router);

app.listen(5500, () => {
  console.log("SERVIDOR_RODANDO...");
});
