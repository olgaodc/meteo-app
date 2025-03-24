const express = require("express");
const router = express.Router();
const {
  GET_CITIES,
  GET_CITY_FORECAST,
  GET_TOP_CITIES,
  GET_CITY_LOG,
  POST_CITY_LOG,
} = require("../controllers/city");

router.get("/cities", GET_CITIES);
router.get("/cities/:code/forecast", GET_CITY_FORECAST);
router.get("/cities/top", GET_TOP_CITIES);
router.get("/cities/:code/logs/", GET_CITY_LOG);
router.post("/logs", POST_CITY_LOG);

module.exports = router;
