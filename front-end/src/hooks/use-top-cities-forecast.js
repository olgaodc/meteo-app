import { useQueries } from "@tanstack/react-query";
import { TOP_CITIES_FORECAST_QUERY_KEY } from "src/api/query-keys";
import { getCityForecast } from "src/axios/cities";

const useTopCitiesForecast = (topCities) => {
  return useQueries({
    queries: topCities.map((city) => ({
      queryKey: [TOP_CITIES_FORECAST_QUERY_KEY, city._id],
      queryFn: () => getCityForecast(city._id),
      staleTime: 1000 * 60 * 5,
      refetchInterval: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    })),
  });
};

export default useTopCitiesForecast;
