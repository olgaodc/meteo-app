import { useQuery } from "@tanstack/react-query";
import ApiService from "src/services/api-service";
const CITIES_QUERY_KEY = "cities";

const fetchCities = async () => {
  const response = await ApiService.get("/cities");
  const cities = response.data;
  return cities;
};

const useCities = () => {
  return useQuery({
    queryKey: [CITIES_QUERY_KEY],
    queryFn: fetchCities,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export default useCities;
