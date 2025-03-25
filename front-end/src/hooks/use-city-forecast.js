import { useQuery } from "@tanstack/react-query";
import { CITY_FORECAST_QUERY_KEY } from "src/api/query-keys";
import { getCityForecast } from "src/axios/cities";

const useCityForecast = (cityCode) => {
  return useQuery({
    queryKey: [CITY_FORECAST_QUERY_KEY, cityCode],
    queryFn: () => getCityForecast(cityCode),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export default useCityForecast;
