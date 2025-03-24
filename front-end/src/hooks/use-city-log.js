import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CITIES_QUERY_KEY } from "src/api/query-keys";
import { createCityLog } from "src/axios/cities";

export const useCreateLog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCityLog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CITIES_QUERY_KEY] });
    },
  });
};
