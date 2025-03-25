import CardsSection from "src/components/cards-section/cards-section";
import Loader from "src/components/loader/loader";
import SearchableSelect from "src/components/searchable-dropdown/searchable-dropdown";
import useCitySearch from "src/hooks/use-city-search";
import useCitySelection from "src/hooks/use-city-selection";
import useTopCities from "src/hooks/use-top-cities";
import { formatTopCities } from "src/utils/formatTopCities";

const HomePage = () => {
  const { handleSearch } = useCitySearch();
  const { selectedCity, handleSelectCity } = useCitySelection();
  const { data: topCities, isLoading } = useTopCities();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <SearchableSelect
          defaultOptions={formatTopCities(topCities)}
          loadOptions={handleSearch}
          onChange={handleSelectCity}
          selectedOption={selectedCity}
        />
        <CardsSection />
      </div>
    </div>
  );
};

export default HomePage;
