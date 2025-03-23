const express = require("express");
const router = express.Router();
const { GET_CITIES } = require("../controllers/city");

router.get("/cities", GET_CITIES);

module.exports = router;
