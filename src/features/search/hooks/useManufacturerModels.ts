import { QUERY_KEYS } from "@/common/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { getManufacturerModelsList } from "../api/getManufacturerModelsList";
import { useEffect } from "react";
import { IManufacturerModelsResponse } from "../utils/types";

function useManufacturerModelsList(manufacturerId: string) {
  const { data, error, isLoading, refetch } =
    useQuery<IManufacturerModelsResponse>({
      queryKey: [QUERY_KEYS.ManufacturerModels],
      queryFn: () => getManufacturerModelsList(manufacturerId),
      enabled: false,
    });

  useEffect(() => {
    refetch();
  }, [manufacturerId, refetch]);

  return { models: data, error, isLoading };
}

export default useManufacturerModelsList;
