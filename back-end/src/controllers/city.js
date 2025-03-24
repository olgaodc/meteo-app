const axios = require("axios");
// const uniqid = require("uniqid");
const CityModel = require("../models/city");

module.exports.GET_CITIES = async (req, res) => {
  try {
    const response = await axios.get("https://api.meteo.lt/v1/places");
    res.json(response.data);
  } catch (err) {
    return res.status(500).json({ response: "API request error", err });
  }
};

module.exports.GET_CITY_FORECAST = async (req, res) => {
  const cityCode = req.params.code;

  try {
    const response = await axios.get(
      `https://api.meteo.lt/v1/places/${cityCode}/forecasts/long-term`
    );
    res.json(response.data);
  } catch (err) {
    return res.status(500).json({ response: "API request error", err });
  }
};

module.exports.GET_TOP_CITIES = async (req, res) => {
  try {
    const topCities = await CityModel.aggregate([
      {
        $group: {
          _id: "$code",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 3,
      },
    ]);

    res.status(200).json({ topCities });
  } catch (err) {
    return res.status(500).json({ response: "Error, please try later", err });
  }
};

module.exports.GET_CITY_LOG = async (req, res) => {
  try {
    const cityLog = await CityModel.findOne({ code: req.params.code })
      .sort({ date: -1 })
      .exec();

    if (!cityLog) {
      return res.status(404).json({ response: "Log not found" });
    }

    return res.status(200).json({ cityLog: cityLog });
  } catch (err) {
    return res.status(500).json({ response: "API request error", err });
  }
};

module.exports.POST_CITY_LOG = async (req, res) => {
  try {
    const cityLog = new CityModel({
      // id: uniqid(),
      name: req.body.name,
      code: req.body.code,
      date: req.body.date,
    });

    const addedCityLog = await cityLog.save();

    return res
      .status(200)
      .json({ response: "City log added successfully", cityLog: addedCityLog });
  } catch (err) {
    return res.status(500).json({ response: "Error, please try later", err });
  }
};
