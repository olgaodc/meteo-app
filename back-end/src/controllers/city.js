const axios = require("axios");
// const CityModel = require("../models/city");

module.exports.GET_CITIES = async (req, res) => {
  try {
    const response = await axios.get("https://api.meteo.lt/v1/places");
    res.json(response.data);
  } catch (err) {
    return res.status(500).json({ response: "API request error", err });
  }
};
