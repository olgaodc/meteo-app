import debounce from "debounce";
import useCities from "./use-cities";

const useCitySearch = () => {
  const { data: cities } = useCities();

  const filterCities = (inputValue) => {
    if (!inputValue) return [];
    return cities.filter((city) =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const debouncedSearch = debounce((inputValue, callback) => {
    const filteredCities = filterCities(inputValue);
    callback(
      filteredCities.map((city) => ({
        value: city.code,
        label: city.name,
      }))
    );
  }, 1000);

  const handleSearch = (inputValue, callback) => {
    debouncedSearch(inputValue, (options) => {
      callback(options);
    });
  };

  return {
    handleSearch,
  };
};

export default useCitySearch;
