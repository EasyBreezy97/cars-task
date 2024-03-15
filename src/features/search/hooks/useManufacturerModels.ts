import { QUERY_KEYS } from "@/common/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { getManufacturerModelsList } from "../api/getManufacturerModelsList";
import { IManufacturerModelsResponse } from "../utils/types";

function useManufacturerModelsList(manufacturerId: string) {
  const { data, error, isLoading } = useQuery<IManufacturerModelsResponse>({
    queryKey: [QUERY_KEYS.ManufacturerModels],
    queryFn: () => getManufacturerModelsList(manufacturerId),
    enabled: !!manufacturerId,
  });

  return { models: data, error, isLoading };
}

export default useManufacturerModelsList;
