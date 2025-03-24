import { useQuery } from "@tanstack/react-query";
import { getTopCities } from "src/axios/cities";
const TOP_CITIES_QUERY_KEY = "top cities";

const useTopCities = () => {
  return useQuery({
    queryKey: [TOP_CITIES_QUERY_KEY],
    queryFn: getTopCities,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export default useTopCities;
