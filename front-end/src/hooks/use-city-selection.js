import { useState } from "react";
import { getCityLog } from "src/axios/cities";
import useTopCities from "./use-top-cities";
import { useCreateLog } from "./use-city-log";

const useCitySelection = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const { mutateAsync: createLog } = useCreateLog();
  const { data: topCities, refetch } = useTopCities();

  const handleSelectCity = async (selectedOption) => {
    setSelectedCity(selectedOption);

    if (selectedOption) {
      const newCityLog = {
        name: selectedOption.label,
        code: selectedOption.value,
        date: new Date(),
      };

      await createLog(newCityLog);

      const cityLogResponse = await getCityLog(selectedOption.value);
      const loggedCityName = cityLogResponse.cityLog.name;
      const loggedCityDate = cityLogResponse.cityLog.date;
      const formattedLogDate = new Date(loggedCityDate).toLocaleString();
      console.log(`User logged ${loggedCityName} city at ${formattedLogDate}`);

      refetch();
    }
  };

  return {
    selectedCity,
    handleSelectCity,
    topCities,
  };
};

export default useCitySelection;
