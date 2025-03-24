import ApiService from "src/services/api-service";

export const getCities = async () => {
  try {
    const response = await ApiService.get("/cities");
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
};

export const getTopCities = async () => {
  try {
    const response = await ApiService.get("/cities/top");
    return response.data;
  } catch (error) {
    console.error("Error fetching top cities:", error);
  }
};

export const getCityForecast = async (cityCode) => {
  try {
    const response = await ApiService.get(`/cities/${cityCode}/forecast/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching city forecast:", error);
  }
};

export const getCityLog = async (cityCode) => {
  try {
    const response = await ApiService.get(`/cities/${cityCode}/logs/`);
    return response.data;
  } catch (error) {
    console.error("Error getting city log:", error);
  }
};

export const createCityLog = async (newCityLog) => {
  try {
    const response = await ApiService.post("/logs", newCityLog);
    return response.data;
  } catch (error) {
    console.error("Error creating city log:", error);
  }
};
