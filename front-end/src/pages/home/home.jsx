import Loader from "src/components/loader/loader";
import SearchableSelect from "src/components/searchable-dropdown/searchable-dropdown";
import useCitySearch from "src/hooks/use-city-search";
import useCitySelection from "src/hooks/use-city-selection";
import useTopCities from "src/hooks/use-top-cities";

const HomePage = () => {
  const { handleSearch } = useCitySearch();
  const { selectedCity, handleSelectCity } = useCitySelection();
  const { data: topCities, isLoading } = useTopCities();

  if (isLoading) {
    return <Loader />;
  }

  console.log(topCities);

  const formattedTopCities = topCities.map((city) => ({
    label: city.name,
    value: city._id,
  }));

  return (
    <div>
      <div>
        <SearchableSelect
          defaultOptions={formattedTopCities}
          loadOptions={handleSearch}
          onChange={handleSelectCity}
          selectedOption={selectedCity}
        />
      </div>
    </div>
  );
};

export default HomePage;
