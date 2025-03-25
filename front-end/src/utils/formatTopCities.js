export const formatTopCities = (cities) => {
  return cities.map((city) => ({
    label: city.name,
    value: city._id,
  }));
};
