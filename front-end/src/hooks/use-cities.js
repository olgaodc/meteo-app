import { useQuery } from "@tanstack/react-query";
import { CITIES_QUERY_KEY } from "src/api/query-keys";
import { getCities } from "src/axios/cities";

const useCities = () => {
  return useQuery({
    queryKey: [CITIES_QUERY_KEY],
    queryFn: getCities,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export default useCities;
