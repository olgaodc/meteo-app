import SearchableSelect from "src/components/searchable-dropdown/searchable-dropdown";
import useCitySearch from "src/hooks/use-city-search";
import useCitySelection from "src/hooks/use-city-selection";

const HomePage = () => {
  const { handleSearch } = useCitySearch();
  const { selectedCity, handleSelectCity, topCities } = useCitySelection();

  console.log(topCities);

  return (
    <div>
      <div>
        <SearchableSelect
          loadOptions={handleSearch}
          onChange={handleSelectCity}
          selectedOption={selectedCity}
        />
      </div>
    </div>
  );
};

export default HomePage;
